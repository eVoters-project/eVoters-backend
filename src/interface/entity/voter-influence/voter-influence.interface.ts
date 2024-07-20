import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";
import { VoterBaseEntityInterface } from "../voter-base/voter-base.entity.interface";

export interface VoterInfluenceInterface extends BaseEntityInterface {
    code: string;
    description: string;
    remarks: string;
    status: string;
    voter_base: VoterBaseEntityInterface;
}