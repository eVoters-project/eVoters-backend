import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { PositionInterface } from "src/interface/entity/position/position.interface";

export class CreatePositionDto implements PositionInterface {
    @ApiProperty({ default: '' })
    @IsString()
    @IsOptional()
    code: string;

    @ApiProperty({ default: '' })
    @IsString()
    @IsOptional()
    name: string;

    @ApiProperty({ default: '' })
    @IsString()
    @IsOptional()
    description: string;

    @ApiProperty({ default: 'Active' })
    @IsString()
    @IsOptional()
    status: string;
}