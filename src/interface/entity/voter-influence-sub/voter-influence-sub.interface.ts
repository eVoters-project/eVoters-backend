import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";
import { VoterInfluenceInterface } from "../voter-influence/voter-influence.interface";

export interface VoterInfluenceSubInterface extends BaseEntityInterface {
    code: string;
    description: string;
    remarks: string;
    status: string;
    voter_influence: Partial<VoterInfluenceInterface>;
}