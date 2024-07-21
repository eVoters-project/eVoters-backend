import { VoterTypeInterface } from "src/interface";

export class ResponseVoterTypeDto implements VoterTypeInterface {
    id?: string;
    code: string;
    description: string;
    status: string;
}