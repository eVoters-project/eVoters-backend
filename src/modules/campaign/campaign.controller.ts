import { Controller, Delete, Get, Param } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
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
        return this.service.getCampaigns();
    }

    @Get(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    getCampaignById(@Param('id') id: string) {
        return this.service.getCampaignById(id);
    }

    @Delete(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    deleteCampaign(@Param('id') id: string) {
        return this.service.deleteCampaign(id);
    }

}