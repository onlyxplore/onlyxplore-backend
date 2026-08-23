import {
  Controller,
  Post,
  Get,
  Patch,
  Body,
  UseGuards,
  Request,
  Inject,
  Headers,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import {
  RegisterDto,
  LoginDto,
  ResetPasswordDto,
  NewPasswordDto,
  VerifyEmailDto,
  UpdateSettingsDto,
  GoogleLoginDto,
} from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(@Inject(AuthService) private authService: AuthService) {}

  @Post('register')
  async register(
    @Body() dto: RegisterDto,
    @Headers('x-frontend-url') origin?: string,
  ) {
    return this.authService.register(dto, origin);
  }

  @Post('login')
  async login(
    @Body() dto: LoginDto,
    @Headers('x-frontend-url') origin?: string,
  ) {
    return this.authService.login(dto, origin);
  }

  @Post('google')
  async googleLogin(@Body() dto: GoogleLoginDto) {
    return this.authService.googleLogin(dto);
  }

  @Post('verify-email')
  async verifyEmail(@Body() dto: VerifyEmailDto) {
    return this.authService.verifyEmail(dto);
  }

  @Post('reset-password')
  async resetPassword(
    @Body() dto: ResetPasswordDto,
    @Headers('x-frontend-url') origin?: string,
  ) {
    return this.authService.resetPassword(dto, origin);
  }

  @Post('new-password')
  async newPassword(@Body() dto: NewPasswordDto) {
    return this.authService.newPassword(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getMe(@Request() req: { user: { id: string } }) {
    return this.authService.getMe(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('settings')
  async updateSettings(
    @Request() req: { user: { id: string } },
    @Body() dto: UpdateSettingsDto,
  ) {
    return this.authService.updateSettings(req.user.id, dto);
  }
}
