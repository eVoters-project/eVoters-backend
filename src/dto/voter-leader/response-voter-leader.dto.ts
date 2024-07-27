import { VoterLeaderInterface, VoterLeaderSubInterface } from "src/interface";

export class ResponseVoterLeader implements VoterLeaderInterface {
    id?: string;
    code: string;
    description: string;
    status: string;
    remarks: string;
    voter_leader_sub: Partial<VoterLeaderSubInterface>;
}