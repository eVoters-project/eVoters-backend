import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { VoterTypeInterface } from "src/interface";

export class CreateVoterTypeDto implements VoterTypeInterface {

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