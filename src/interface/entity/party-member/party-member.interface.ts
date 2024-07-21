import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";
import { VoterInterface } from "../voter/voter.entity.interface";
import { PartyInterface } from "../party/party.entity.interface";

export interface PartyMemberInterface extends BaseEntityInterface {
    sequence: number;
    voter: VoterInterface;
    party: PartyInterface;
}