import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";
import { ElectionPositionInterface } from "src/interface";

export class CreateElectionPositionDto implements ElectionPositionInterface {
    @ApiProperty({ default: 0 })
    @IsInt()
    sequence: number;

    @ApiProperty({ default: '' })
    @IsString()
    code: string;

    @ApiProperty({ default: '' })
    @IsString()
    name: string;

    @ApiProperty({ default: '' })
    @IsString()
    description: string;

    @ApiProperty({ default: 'Active' })
    @IsString()
    status: string;
}