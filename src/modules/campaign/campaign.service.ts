import { Injectable } from "@nestjs/common";
import { CampaignEntity } from "src/entity";
import { DataSource } from "typeorm";

@Injectable()
export class CampaignService {

    constructor(private datasource: DataSource) {}

    getCampaigns() {
        return this.datasource.manager.find(CampaignEntity);
    }

    getCampaignById(id: string) {
        return this.datasource.manager.findOne(CampaignEntity, {
            where: {
                id: id
            }
        })
    }

    async deleteCampaign(id: string) {
        var campaign = await this.getCampaignById(id);
        
        if (campaign) {
            return this.datasource.manager.remove(CampaignEntity, campaign);
        }
    }
}