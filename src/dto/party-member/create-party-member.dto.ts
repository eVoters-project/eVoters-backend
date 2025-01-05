import { PartyInterface, PartyMemberInterface, VoterInterface } from "src/interface";

export class CreatePartyMemberDto implements PartyMemberInterface {
    sequence: number;
    voter: VoterInterface;
    party: PartyInterface;
    status: string;
}