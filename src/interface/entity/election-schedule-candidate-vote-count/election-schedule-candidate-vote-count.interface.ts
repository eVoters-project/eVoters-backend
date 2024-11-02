import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";
import { VoterInterface } from "../voter/voter.entity.interface";
import { ElectionScheduleCandidateInterface } from "../election-schedule-candidate/election-schedule-candidate.interface";

export interface ElectionScheduleCandidateVoteCount extends BaseEntityInterface {
    election_schedule_candidate: ElectionScheduleCandidateInterface;
    voter: VoterInterface;
    count: number;
}