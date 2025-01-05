import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";
import { VoterInterface } from "../voter/voter.entity.interface";
import { PartyMemberInterface } from "../party-member/party-member.interface";
import { ElectionPositionInterface } from "../election-position/election-position.interface";

export interface ElectionCandidateInterface extends BaseEntityInterface {
    sequence: number;
    position: ElectionPositionInterface;
    party_member: PartyMemberInterface;
    voter: VoterInterface;
    remarks: string;
    status: string;
}