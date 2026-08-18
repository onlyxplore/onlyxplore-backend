import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

import { UserRole } from '@prisma/client';

export class RegisterDto {
  @IsEmail({}, { message: 'Please enter a valid email address.' })
  email!: string;

  @IsString()
  @MinLength(2, { message: 'Name must be at least 2 characters' })
  name!: string;

  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  password!: string;

  @IsOptional()
  role?: UserRole;
}

export class LoginDto {
  @IsEmail({}, { message: 'Invalid email, try again!' })
  email!: string;

  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  password!: string;

  @IsOptional()
  @IsString()
  code?: string;
}

export class ResetPasswordDto {
  @IsEmail({}, { message: 'Email is required, try again!' })
  email!: string;
}

export class NewPasswordDto {
  @IsString()
  @MinLength(6, { message: 'Minimum of 6 characters required!' })
  password!: string;

  @IsString()
  @IsNotEmpty()
  token!: string;
}

export class VerifyEmailDto {
  @IsString()
  @IsNotEmpty()
  token!: string;
}

export class UpdateSettingsDto {
  @IsOptional()
  @IsString()
  name?: string;
}

export class GoogleLoginDto {
  @IsEmail()
  email!: string;

  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsString()
  providerAccountId!: string;

  @IsOptional()
  role?: UserRole;
}
