import { Module } from "@nestjs/common";
import { CampaignController } from "./campaign.controller";
import { CampaignService } from "./campaign.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CampaignEntity } from "src/entity";

@Module({
    imports: [TypeOrmModule.forFeature([CampaignEntity])],
    controllers: [CampaignController],
    providers: [CampaignService]
})
export class CampaignModule { }