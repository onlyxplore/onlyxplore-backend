import { Controller, Get } from '@nestjs/common';
import { AdminDashboardService } from './admin-dashboard.service';

@Controller('admin')
export class AdminDashboardController {
  constructor(private readonly adminDashboardService: AdminDashboardService) {}

  @Get('dashboard/stats')
  getStats() {
    return this.adminDashboardService.getStats();
  }

  @Get('hosts')
  getHosts() {
    return this.adminDashboardService.getHosts();
  }

  @Get('destinations')
  getDestinations() {
    return this.adminDashboardService.getDestinations();
  }

  @Get('analytics')
  getAnalytics() {
    return this.adminDashboardService.getAnalytics();
  }
}
