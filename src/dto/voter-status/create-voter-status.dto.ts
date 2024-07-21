import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { VoterStatusInterface } from "src/interface";

export class CreateVoterStatusDto implements VoterStatusInterface {
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