import { ResponseElectionPositionDto } from "../election-position/response-election-position.dto";

export class ResponseElectionScheduleDto {
    id: string;
    date: Date;
    type: string;
    remarks: string;
}