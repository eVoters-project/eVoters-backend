import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { VoterBaseEntityInterface } from "src/interface/entity/voter-base/voter-base.entity.interface";

export class CreateVoterBaseDto implements VoterBaseEntityInterface {

    @ApiProperty({
        default: ''
    })
    @IsOptional()
    code: string;

    @ApiProperty({
        default: ''
    })
    @IsString()
    description: string;
}