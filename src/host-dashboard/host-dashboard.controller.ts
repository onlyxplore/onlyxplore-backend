import { Controller, Get } from '@nestjs/common';
import { HostDashboardService } from './host-dashboard.service';

@Controller('host')
export class HostDashboardController {
  constructor(private readonly hostDashboardService: HostDashboardService) {}

  @Get('dashboard/stats')
  getStats() {
    return this.hostDashboardService.getStats();
  }

  @Get('itineraries')
  getItineraries() {
    return this.hostDashboardService.getItineraries();
  }

  @Get('bookings')
  getBookings() {
    return this.hostDashboardService.getBookings();
  }

  @Get('analytics')
  getAnalytics() {
    return this.hostDashboardService.getAnalytics();
  }
}
