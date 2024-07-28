import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";

export interface CampaignInterface extends BaseEntityInterface {
    code: string;
    when: Date;
    what: string;
    where: string;
    remarks: string;
    status: string;
    attendees: number;
}