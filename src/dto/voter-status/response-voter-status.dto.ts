import { VoterStatusInterface } from "src/interface";

export class ResponseVoterStatusDto implements VoterStatusInterface {
    id?: string;
    code: string;
    description: string;
    status: string;
}