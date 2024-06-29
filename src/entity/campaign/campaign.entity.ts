import { BaseEntity } from "src/abstract/entity/base.entity";
import { CampaignEntityInterface } from "src/interface/entity/campaign/campaign.entity.interface";
import { Entity } from "typeorm";

@Entity('trans_campaign')
export class CampaignEntity extends BaseEntity implements CampaignEntityInterface {
    
}