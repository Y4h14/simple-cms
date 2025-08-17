import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import { UsersService } from 'src/users/users.service';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string) {
    const user = await this.userService.findOne(email);

    if (!user || !bcrypt.compareSync(pass, user?.password)) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(email: string, name: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await this.userService.create({
      email,
      name,
      password: hashedPassword,
    });
    const payload = { sub: newUser.id, username: newUser.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };

  }
}
