import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './signIn.dto';
import { Public } from './public';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  signIn(@Body() loginDto: SignInDto) {
    const { email, password } = loginDto;
    return this.authService.signIn(email, password);
  }

  @Public()
  @Post('register')
  signUp(@Body() loginDto: SignInDto) {
    const { email, name, password } = loginDto;
    return this.authService.signUp(email, name, password);
  }
}
