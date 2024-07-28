import { ApiProperty } from "@nestjs/swagger";
import { IsObject, IsString } from "class-validator";
import { LeaderInterface, PartyInterface } from "src/interface";

export class CreatePartyDto implements PartyInterface {
    @ApiProperty({ default: '' })
    @IsString()
    code: string;

    @ApiProperty({ default: '' })
    @IsString()
    name: string;

    @ApiProperty({ default: '' })
    @IsString()
    description: string;

    @ApiProperty({ default: '' })
    @IsString()
    remarks: string;

    @ApiProperty({ default: { id: '' } })
    @IsObject()
    leader: LeaderInterface;

    @ApiProperty({ default: 'Active' })
    @IsString()
    status: string;
}