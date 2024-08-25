import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsObject, IsOptional } from "class-validator";
import { ElectionSchedulePositionInterface } from "src/interface/entity/election-schedule-position/election-schedule-position.interface";
import { ElectionScheduleInterface } from "src/interface/entity/election-schedule/election-schedule.interface";
import { PositionInterface } from "src/interface/entity/position/position.interface";

export class CreateElectionSchedulePositionDto implements ElectionSchedulePositionInterface {
    @ApiProperty({ default: 99 })
    @IsInt()
    sequence: number

    @ApiProperty({ default: { id: '' } })
    @IsObject()
    position: PositionInterface;

    @ApiProperty({ default: 1 })
    @IsInt()
    quantity: number;

    @ApiProperty({ default: '' })
    @IsOptional()
    remarks: string;

    @ApiProperty({ default: { id: '' } })
    @IsObject()
    election_schedule: ElectionScheduleInterface;
}