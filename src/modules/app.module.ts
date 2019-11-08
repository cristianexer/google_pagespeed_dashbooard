import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { DashboardController } from '../controllers/dashboard.controller';
import { GoogleService } from '../services/google.service';
import { ConfigModule } from 'src/config/config.module';

@Module({
  imports: [
    ConfigModule
  ],
  controllers: [
    AppController,
    DashboardController
  ],
  providers: [
    AppService,
    GoogleService
  ],
})
export class AppModule { }
