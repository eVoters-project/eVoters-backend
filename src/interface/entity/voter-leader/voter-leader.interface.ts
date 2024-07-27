import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";
import { VoterLeaderSubInterface } from "../voter-leader-sub/voter-leader-sub.interface";

export interface VoterLeaderInterface extends BaseEntityInterface {
    code: string;
    description: string;
    status: string;
    remarks: string;
    voter_leader_sub: Partial<VoterLeaderSubInterface>;
}