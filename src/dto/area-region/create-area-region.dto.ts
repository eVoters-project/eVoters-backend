import { ApiProperty } from "@nestjs/swagger";
import { IsObject, IsString } from "class-validator";
import { AreaBarangayInterface, AreaLGUInterface, AreaRegionInterface } from "src/interface";

export class CreateAreaRegionDto implements AreaRegionInterface {

    @ApiProperty({ default: '' })
    @IsString()
    code: string;

    @ApiProperty({ default: '' })
    @IsString()
    name: string;

    @ApiProperty({ default: 'Active' })
    @IsString()
    status: string;
}