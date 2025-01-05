import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsInt, IsOptional, IsString } from "class-validator";
import { PositionInterface } from "src/interface/entity/position/position.interface";

export class CreatePositionDto implements PositionInterface {
    @ApiProperty({ default: 1 })
    @IsInt()
    sequence: number;

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

    @ApiProperty({ default: '' })
    @IsString()
    @IsIn([
        'National',
        'Local'
        ,], {
        message: 'Level must be either National or Local'
    })
    level: string;

    @ApiProperty({ default: '' })
    @IsString()
    @IsIn([
        'Presidential',
        'Midterm'
        ,], {
        message: 'Election Cycle must be either Presidential or Midterm'
    })
    election_cycle: string;

    @ApiProperty({ default: '' })
    @IsString()
    @IsOptional()
    type: string;

    @ApiProperty({ default: 'Active' })
    @IsString()
    @IsOptional()
    status: string;
}