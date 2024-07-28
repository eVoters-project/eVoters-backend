import { ApiProperty } from "@nestjs/swagger";
import { IsObject, IsOptional, IsString } from "class-validator";
import { AreaBarangayInterface, AreaPurokInterface } from "src/interface";

export class CreateAreaPurokDto implements AreaPurokInterface {
    @ApiProperty({ default: '' })
    @IsString()
    @IsOptional()
    code: string;

    @ApiProperty({ default: '' })
    @IsString()
    @IsOptional()
    name: string;

    @ApiProperty({ default: { id: '' } })
    @IsObject()
    @IsOptional()
    area_barangay: AreaBarangayInterface;

    @ApiProperty({ default: 'Active' })
    @IsString()
    @IsOptional()
    status: string;
}