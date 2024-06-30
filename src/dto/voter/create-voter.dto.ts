import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { format } from "date-fns";
import { VoterEntityInterface } from "src/interface";

export class CreateVoterDto implements VoterEntityInterface {

    @ApiProperty({ default: '' })
    @IsString()
    firstname: string;

    @ApiProperty({ default: '' })
    @IsString()
    middlename: string;

    @ApiProperty({ default: '' })
    @IsString()
    lastname: string;

    @ApiProperty({ default: '' })
    @IsString()
    nickname: string;

    @ApiProperty({ default: '' })
    @IsString()
    gender: string;

    @ApiProperty({ default: format(new Date(), 'yyyy-MM-dd') })
    @IsString()
    date_of_birth: Date;

    @ApiProperty({ default: '' })
    @IsString()
    address: string;

    @ApiProperty({ default: '' })
    @IsString()
    precinct_no: string;

    @ApiProperty({ default: '' })
    @IsString()
    vin_no: string;

    @ApiProperty({ default: '' })
    @IsString()
    status: string;

    @ApiProperty({ default: '' })
    @IsString()
    category: string;

    @ApiProperty({ default: '' })
    @IsString()
    vote_group: string;

    @ApiProperty({ default: '' })
    @IsString()
    vote_type: string;

    @ApiProperty({ default: '' })
    @IsString()
    vote_status: string;

    @ApiProperty({ default: '' })
    @IsString()
    latitude: string;

    @ApiProperty({ default: '' })
    @IsString()
    longitude: string;
}