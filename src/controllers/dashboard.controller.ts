import { Get, Controller } from '@nestjs/common';
import { GoogleService } from '../services/google.service';


@Controller('dashboard')
export class DashboardController {
    constructor(private readonly googleService: GoogleService) { }


    @Get()
    async getWebsites(): Promise<object> {
        const websitesFromDb: URL[] = [
            new URL('https://www.hotel-internet-marketing.com/'),
            new URL('https://www.bbc.co.uk/'),
            new URL('https://www.google.co.uk/')
        ];
        return await this.googleService.ofWebsites(websitesFromDb);
    }


}