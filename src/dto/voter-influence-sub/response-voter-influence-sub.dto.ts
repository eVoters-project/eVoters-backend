import { VoterInfluenceInterface, VoterInfluenceSubInterface } from "src/interface";

export class ResponseVoterInfluenceSubDto implements VoterInfluenceSubInterface {
    id?: string;
    code: string;
    description: string;
    remarks: string;
    status: string;
    voter_influence: Partial<VoterInfluenceInterface>;
}