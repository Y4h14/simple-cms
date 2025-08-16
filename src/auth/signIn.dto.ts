import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

/**
 * Data Transfer Object for user sign-in.
 * Contains validated fields for email and password.
 */
export class SignInDto {
  name!: string;
  password!: string;
}
