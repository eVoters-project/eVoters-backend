import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsObject, IsString } from "class-validator";
import { ElectionPositionInterface, ElectionScheduleInterface } from "src/interface";
import { PositionInterface } from "src/interface/entity/position/position.interface";

export class CreateElectionPositionDto implements ElectionPositionInterface {

    @ApiProperty({ default: 1 })
    @IsInt()
    sequence: number;

    @ApiProperty({ default: 1 })
    @IsInt()
    seat: number;

    @ApiProperty({ default: '' })
    @IsString()
    remarks: string;

    @ApiProperty({ default: { id: '' } })
    @IsObject()
    position: PositionInterface;

    @ApiProperty({ default: { id: '' } })
    @IsObject()
    election_schedule: ElectionScheduleInterface;

}