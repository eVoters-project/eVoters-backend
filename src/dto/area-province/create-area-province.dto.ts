import { ApiProperty } from "@nestjs/swagger";
import { IsObject, IsString } from "class-validator";
import { AreaProvinceInterface, AreaRegionInterface } from "src/interface";

export class CreateAreaProvinceDto implements AreaProvinceInterface {
    @ApiProperty({ default: '' })
    @IsString()
    code: string;

    @ApiProperty({ default: '' })
    @IsString()
    name: string;

    @ApiProperty({ default: { id: '' } })
    @IsObject()
    area_region: AreaRegionInterface;

    @ApiProperty({ default: 'Active' })
    @IsString()
    status: string;
}