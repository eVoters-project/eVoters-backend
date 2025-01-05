import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsDateString, IsOptional, IsString, ValidateNested } from "class-validator";
import { format } from "date-fns";
import { ElectionScheduleInterface } from "src/interface/entity/election-schedule/election-schedule.interface";
import { Type } from "class-transformer";

export class CreateElectionScheduleDto implements ElectionScheduleInterface {
    @ApiProperty({ default: format(new Date(), 'yyyy-MM-dd') })
    @IsDateString()
    date: Date;

    @ApiProperty({ default: 'Presidential Election' })
    @IsString()
    type: string;

    @ApiProperty({ default: '' })
    @IsOptional()
    remarks: string;

    @ApiProperty({ type: [CreateElectionScheduleDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @IsOptional()
    @Type(() => CreateElectionScheduleDto)
    elective_positions: CreateElectionScheduleDto[];
}