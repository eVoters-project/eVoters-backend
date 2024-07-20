import { ApiProperty } from "@nestjs/swagger";
import { IsObject, IsString } from "class-validator";
import { VoterInfluenceInterface, VoterInfluenceSubInterface } from "src/interface";

export class CreateVoterInfluenceSubDto implements VoterInfluenceSubInterface {
    @ApiProperty({ default: '' })
    @IsString()
    code: string;

    @ApiProperty({ default: '' })
    @IsString()
    description: string;

    @ApiProperty({ default: '' })
    @IsString()
    remarks: string;

    @ApiProperty({ default: '' })
    @IsString()
    status: string;

    @ApiProperty({ default: { id: '' } })
    @IsObject()
    voter_influence: VoterInfluenceInterface;
}