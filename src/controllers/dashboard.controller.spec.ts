import { Test, TestingModule } from '@nestjs/testing';
import { DashboardController } from './dashboard.controller';
import { GoogleService } from '../services/google.service';
import { ConfigModule } from '../config/config.module';



describe('DashboardController', () => {
    let dashboardController: DashboardController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            imports: [
                ConfigModule
            ],
            controllers: [
                DashboardController
            ],
            providers: [
                GoogleService
            ],
        }).compile();

        dashboardController = app.get<DashboardController>(DashboardController);

    });

    describe('getWebsites', () => {
        jest.setTimeout(50000);
        it('should return "JSON[]"', async () => {
            const websitesData = await dashboardController.getWebsites();

            expect(websitesData).toMatchObject(websitesData);
        });
    });
});
