import { ApiProperty } from "@nestjs/swagger";
import { IsObject, IsString } from "class-validator";
import { AreaLGUInterface, AreaProvinceInterface } from "src/interface";

export class CreateAreaLGUDto implements AreaLGUInterface {
    @ApiProperty({ default: '' })
    @IsString()
    code: string;

    @ApiProperty({ default: '' })
    @IsString()
    name: string;

    @ApiProperty({ default: { id: '' } })
    @IsObject()
    area_province: AreaProvinceInterface;

    @ApiProperty({ default: 'Active' })
    @IsString()
    status: string;
}