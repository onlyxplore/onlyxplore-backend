import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { HostProfileService } from './host-profile.service';
import { UpdateHostProfileDto } from './dto/update-host-profile.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('host-profile')
@UseGuards(JwtAuthGuard)
export class HostProfileController {
  constructor(@Inject(HostProfileService) private readonly hostProfileService: HostProfileService) {}

  @Get()
  getProfile(@Request() req: { user: { id: string } }) {
    return this.hostProfileService.getProfile(req.user.id);
  }

  @Post()
  upsertProfile(
    @Request() req: { user: { id: string } },
    @Body() updateHostProfileDto: UpdateHostProfileDto,
  ) {
    return this.hostProfileService.upsertProfile(
      req.user.id,
      updateHostProfileDto,
    );
  }
}
