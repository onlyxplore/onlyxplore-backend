import {
  Controller,
  Get,
  Query,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { ExploreService } from './explore.service';

@Controller('explore')
export class ExploreController {
  constructor(private readonly exploreService: ExploreService) {}

  @Get('trips')
  getTrips(@Query('category') category: string, @Query('scope') scope: string) {
    return this.exploreService.getTrips(category, scope);
  }

  @Get('trips/:id')
  getTripById(@Param('id') id: string) {
    const trip = this.exploreService.getTripById(Number(id));
    if (!trip) throw new NotFoundException('Trip not found');
    return trip;
  }
}
