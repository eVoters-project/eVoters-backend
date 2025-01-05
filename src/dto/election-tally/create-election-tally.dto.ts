import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDateString, IsIn, IsInt, IsObject, IsString, ValidateNested } from "class-validator";
import { format } from "date-fns";
import { ElectionCandidateEntity } from "src/entity";
import { ElectionPrecinctEntity } from "src/entity/election-precinct/election-precinct.entity";
import { ElectionCandidateInterface, ElectionTallyInterface } from "src/interface";
import { ElectionPrecinctInterface } from "src/interface/entity/election-precinct/election-precinct.interface";
import { BaseDto } from "../_base/base.dto";

export class CreateElectionTallyDto implements ElectionTallyInterface {

    @ApiProperty({ default: format(new Date(), 'yyyy-MM-dd') })
    @IsDateString()
    date: Date;

    @ApiProperty({ default: { id: '' } })
    @IsObject()
    @ValidateNested()
    @Type(() => BaseDto)
    candidate: ElectionCandidateInterface;

    @ApiProperty({ default: { id: '' } })
    @IsObject()
    @ValidateNested()
    @Type(() => BaseDto)
    precinct: ElectionPrecinctInterface;

    @ApiProperty({ default: '' })
    @IsString()
    @IsIn(['SV', 'EC'], {
        message: 'Election tally type must either SV(Straw-Vote) or EC(Election-Count)'
    })
    type: string;

    @ApiProperty({ default: 0 })
    @IsInt()
    count: number;

}