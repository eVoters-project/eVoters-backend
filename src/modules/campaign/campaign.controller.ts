import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CampaignService } from "./campaign.service";

@ApiTags('Campaign')
@Controller({
    path: 'campaign',
    version: '1'
})
export class CampaignController {

    constructor(private service: CampaignService) {}

    @Get()
    getCampaigns() {
        return 'Fetching Campaigns';
    }

}