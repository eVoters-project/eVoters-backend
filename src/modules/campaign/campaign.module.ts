import { Module } from "@nestjs/common";
import { CampaignController } from "./campaign.controller";
import { CampaignService } from "./campaign.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CampaignEntity } from "src/entity";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
    imports: [
        TypeOrmModule.forFeature([CampaignEntity]),
        ConfigModule
    ],
    controllers: [CampaignController],
    providers: [
        CampaignService,
        ConfigService
    ]
})
export class CampaignModule { }