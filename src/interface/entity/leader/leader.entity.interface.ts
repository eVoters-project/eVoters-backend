import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";
import { VoterLeaderInterface } from "../voter-leader/voter-leader.interface";
import { VoterInterface } from "../voter/voter.entity.interface";

export interface LeaderInterface extends BaseEntityInterface {
    voter: VoterInterface
    voter_leader: VoterLeaderInterface
    status: string;
}