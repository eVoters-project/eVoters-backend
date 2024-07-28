import { LeaderInterface, VoterInterface, VoterLeaderInterface } from "src/interface";

export class ResponseLeaderDto {
    id?: string;
    voter: string;
    voter_leader: string;
    status: string;
}