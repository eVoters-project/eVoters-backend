import { VoterBaseEntityInterface } from "src/interface";

export class ResponseVoterBaseDto implements VoterBaseEntityInterface {
    id?: string;
    code: string;
    description: string;
}