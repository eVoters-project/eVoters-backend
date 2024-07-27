import { VoterLeaderSubInterface } from "src/interface";

export class ResponseVoterLeaderSubDto implements VoterLeaderSubInterface {
    id?: string;
    code: string;
    description: string;
    status: string;
}