import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { VoterLeaderSubInterface } from "src/interface";

export class CreateVoterLeaderSubDto implements VoterLeaderSubInterface {
    @ApiProperty({ default: '' })
    @IsString()
    code: string;

    @ApiProperty({ default: '' })
    @IsString()
    description: string;

    @ApiProperty({ default: 'Active' })
    @IsString()
    status: string;
}