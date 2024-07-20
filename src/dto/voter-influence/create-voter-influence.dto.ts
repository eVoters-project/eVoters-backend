import { ApiProperty } from "@nestjs/swagger";
import { IsObject, IsOptional, IsString } from "class-validator";
import { VoterBaseEntityInterface } from "src/interface/entity/voter-base/voter-base.entity.interface";
import { VoterInfluenceInterface } from "src/interface/entity/voter-influence/voter-influence.interface";

export class CreateVoterInfluenceDto implements VoterInfluenceInterface {
    @ApiProperty({ default: '' })
    @IsString()
    code: string;

    @ApiProperty({ default: '' })
    @IsString()
    description: string;

    @ApiProperty({ default: '' })
    @IsString()
    remarks: string;

    @ApiProperty({ default: 'Active' })
    @IsString()
    status: string;

    @ApiProperty({ default: { id: '' } })
    @IsOptional()
    @IsObject()
    voter_base: VoterBaseEntityInterface;
}