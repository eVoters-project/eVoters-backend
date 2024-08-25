import { PartialType } from "@nestjs/swagger";
import { CreateElectionScheduleDto } from "./create-election-schedule.dto";

export class UpdateElectionScheduleDto extends PartialType(CreateElectionScheduleDto) {
}