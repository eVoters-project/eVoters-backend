import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { GroupTypeEntityInterface } from "src/interface/entity/group-type/group-type.entity.interface";

export class CreateGroupTypeDto implements GroupTypeEntityInterface {
    @ApiProperty({ default: '' })
    @IsString()
    name: string;

    @ApiProperty({ default: '' })
    @IsString()
    description: string;

    @ApiProperty({ default: 'ACTIVE' })
    @IsString()
    status: string;
}