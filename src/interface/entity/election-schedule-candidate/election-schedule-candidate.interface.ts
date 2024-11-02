import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";
import { PositionInterface } from "../position/position.interface";
import { VoterInterface } from "../voter/voter.entity.interface";
import { ElectionScheduleInterface } from "../election-schedule/election-schedule.interface";
import { ElectionSchedulePositionInterface } from "../election-schedule-position/election-schedule-position.interface";
import { PartyInterface } from "../party/party.entity.interface";

export interface ElectionScheduleCandidateInterface extends BaseEntityInterface {
    sequence: number;
    election_schedule_position: ElectionSchedulePositionInterface;
    party: PartyInterface;
    voter: VoterInterface;
    status: string;
}