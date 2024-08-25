import { ResponseElectionSchedulePositionDto } from "../election-schedule-position/response-election-schedule-position.dto";

export class ResponseElectionScheduleDto {
    id: string;
    date: Date;
    type: string;
    remarks: string;
    elective_positions: ResponseElectionSchedulePositionDto[];
}