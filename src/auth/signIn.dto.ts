/**
 * Data Transfer Object for user sign-in.
 * Contains validated fields for email and password.
 */
export class SignInDto {
  email: string;
  name: string;
  password: string;
}
