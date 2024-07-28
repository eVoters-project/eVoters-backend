import { ApiProperty } from "@nestjs/swagger";
import { IsObject, IsString } from "class-validator";
import { AreaBarangayInterface, AreaLGUInterface } from "src/interface";

export class CreateAreaBarangayDto implements AreaBarangayInterface {
    @ApiProperty({ default: '' })
    @IsString()
    code: string;

    @ApiProperty({ default: '' })
    @IsString()
    name: string;

    @ApiProperty({ default: { id: '' } })
    @IsObject()
    area_lgu: AreaLGUInterface;

    @ApiProperty({ default: 'Active' })
    @IsString()
    status: string;
}