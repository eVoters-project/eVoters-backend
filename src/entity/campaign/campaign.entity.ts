import { BaseEntity } from "src/abstract/entity/base.entity";
import { CampaignInterface } from "src/interface/entity/campaign/campaign.interface";
import { Column, Entity } from "typeorm";

@Entity('trans_campaign')
export class CampaignEntity extends BaseEntity implements CampaignInterface {
    @Column({ type: 'nvarchar', length: 100 })
    code: string;

    @Column({ type: 'datetime' })
    when: Date;

    @Column({ type: 'nvarchar', length: 255 })
    what: string;

    @Column({ type: 'nvarchar', length: 255 })
    where: string;

    @Column({ type: 'nvarchar', length: 1000 })
    remarks: string;

    @Column({ type: 'nvarchar', length: 50 })
    status: string;

    @Column({ type: 'numeric' })
    attendees: number;
}