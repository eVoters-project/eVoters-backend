import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsObject, IsOptional, IsString } from "class-validator";
import { ElectionCandidateInterface, ElectionPositionInterface, ElectionScheduleInterface, PartyInterface, PartyMemberInterface, VoterInterface } from "src/interface";

export class CreateElectionCandidateDto implements ElectionCandidateInterface {

    @ApiProperty({ default: 1 })
    @IsInt()
    @IsOptional()
    sequence: number;

    @ApiProperty({ default: { id: '' } })
    @IsObject()
    position: ElectionPositionInterface;

    @ApiProperty({ default: { id: '' } })
    @IsObject()
    @IsOptional()
    party_member: PartyMemberInterface;

    @ApiProperty({ default: { id: '' } })
    @IsObject()
    @IsOptional()
    voter: VoterInterface;

    @ApiProperty({ default: '' })
    @IsString()
    remarks: string;

    @ApiProperty({ default: 'Active' })
    @IsString()
    status: string;

}