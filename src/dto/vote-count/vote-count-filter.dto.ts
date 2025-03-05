import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsIn, IsOptional, IsString } from "class-validator";

export class VoteCountFilter {
    @ApiProperty({
        enum: ['SV', 'EC'],
        default: 'EC'
    })
    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    @IsIn(['SV', 'EC'], { message: 'status must be one of: SV, EC' })
    result: string;

    @ApiProperty({ default: '' })
    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    barangay: string;

    @ApiProperty({ default: '' })
    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    purok: string;

    @ApiProperty({ default: '' })
    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    position: string;

    @ApiProperty({ default: '' })
    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    precinct: string;
}