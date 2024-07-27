import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";

export interface VoterLeaderSubInterface extends BaseEntityInterface {
    code: string;
    description: string;
    status: string;
}