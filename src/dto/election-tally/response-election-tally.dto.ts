export class ResponseElectionTallyDto {
    id: string;
    date: Date;
    candidate: string;
    candidate_type: string;
    precinct: string;
    count: number;
}