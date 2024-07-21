import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";
import { VoterInterface } from "../voter/voter.entity.interface";
import { LeaderEntityInterface } from "../leader/leader.entity.interface";

export interface PartyInterface extends BaseEntityInterface {
    code: string;
    name: string;
    leader: Partial<LeaderEntityInterface>;
    status: string;
}