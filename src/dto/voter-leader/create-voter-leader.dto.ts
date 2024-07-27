import { ApiProperty } from "@nestjs/swagger";
import { IsObject, IsString } from "class-validator";
import { VoterLeaderInterface, VoterLeaderSubInterface } from "src/interface";

export class CreateVoterLeaderDto implements VoterLeaderInterface {
    @ApiProperty({ default: '' })
    @IsString()
    code: string;

    @ApiProperty({ default: '' })
    @IsString()
    description: string;

    @ApiProperty({ default: 'Active' })
    @IsString()
    status: string;

    @ApiProperty({ default: '' })
    @IsString()
    remarks: string;

    @ApiProperty({ default: { id: '' } })
    @IsObject()
    voter_leader_sub: Partial<VoterLeaderSubInterface>;
}