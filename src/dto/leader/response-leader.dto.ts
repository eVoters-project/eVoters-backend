import { LeaderInterface, VoterInterface, VoterLeaderInterface } from "src/interface";

export class ResponseLeaderDto implements LeaderInterface {
    id?: string;
    voter: VoterInterface;
    voter_leader: VoterLeaderInterface;
    status: string;
}