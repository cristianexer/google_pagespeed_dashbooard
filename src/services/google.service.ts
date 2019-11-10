import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { ConfigService } from '../config/config.service';

@Injectable()
export class GoogleService {
    private client: AxiosInstance;

    constructor(config: ConfigService) {
        this.client = axios.create({
            baseURL: 'https://www.googleapis.com/pagespeedonline/v4',
            params: {
                key: config.googleAPIKey,
                // strategy: 'mobile'

            },
        });
    }

    async ofWebsite(website: URL): Promise<object> {
        const response = await this.client.get('runPagespeed', {
            params: { url: website.href },
        });
        // console.log(response.data)
        // return response.data;
        let data = {
            title: response.data.title,
            response_code: response.data.responseCode,
            speed_score: `${response.data.ruleGroups.SPEED.score}/100`,
            site_url: response.data.id
        }
        return data;
    }


    async ofWebsites(websites: URL[]): Promise<object> {
        const res = await Promise.all(websites.map(async (site): Promise<object> => await this.ofWebsite(site)));
        return res;
    }
}