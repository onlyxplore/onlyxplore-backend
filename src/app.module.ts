import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { HostProfileModule } from './host-profile/host-profile.module';
import { SupabaseModule } from './supabase/supabase.module';
import { ExploreModule } from './explore/explore.module';
import { HostDashboardModule } from './host-dashboard/host-dashboard.module';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    MailModule,
    AuthModule,
    HostProfileModule,
    SupabaseModule,
    ExploreModule,
    HostDashboardModule,
    AdminDashboardModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
