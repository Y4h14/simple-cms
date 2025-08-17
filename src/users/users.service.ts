import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
export type User = any;

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(user: Prisma.UserCreateInput) {
    return this.databaseService.user.create({
      data: user,
    });
  }
  async findOne(email: string): Promise<User> {
    return this.databaseService.user.findUnique({
      where: {
        email,
      },
    });
  }
}
