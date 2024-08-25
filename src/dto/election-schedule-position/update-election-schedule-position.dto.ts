import { PartialType } from "@nestjs/swagger";
import { CreateElectionSchedulePositionDto } from "./create-election-schedule-position.dto";

export class UpdateElectionSchedulePositionDto extends PartialType(CreateElectionSchedulePositionDto) { }