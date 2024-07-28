import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { CampaignService } from "./campaign.service";
import { CreateCampaignDto } from "src/dto/campaign/create-campaign.dto";
import { UpdateCampaignDto } from "src/dto/campaign/update-campaign.dto";

@ApiTags('Campaign')
@Controller({
    path: 'campaign',
    version: '1'
})
export class CampaignController {

    constructor(private service: CampaignService) { }

    @Get()
    getCampaigns() {
        return this.service.getAll();
    }

    @Get(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    getCampaignById(@Param('id') id: string) {
        return this.service.getById(id);
    }

    @Post()
    @ApiBody({
        type: CreateCampaignDto
    })
    create(@Body() body: CreateCampaignDto) {
        return this.service.create(body);
    }

    @Patch(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    @ApiBody({
        type: UpdateCampaignDto
    })
    update(@Param('id') id: string, @Body() body: UpdateCampaignDto) {
        return this.service.update(id, body);
    }

    @Delete(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    deleteCampaign(@Param('id') id: string) {
        return this.service.delete(id);
    }

}