import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { VoterPositionInterface } from "src/interface";

export class CreateVoterPositionDto implements VoterPositionInterface {
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