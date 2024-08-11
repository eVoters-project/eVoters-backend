import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsObject, IsOptional, IsString } from "class-validator";
import { format } from "date-fns";
import { AreaBarangayInterface, AreaPurokInterface, VoterInterface } from "src/interface";

export class CreateVoterDto implements VoterInterface {

    @ApiProperty({ default: '' })
    @IsString()
    @IsOptional()
    firstname: string;

    @ApiProperty({ default: '' })
    @IsString()
    @IsOptional()
    middlename: string;

    @ApiProperty({ default: '' })
    @IsString()
    @IsOptional()
    lastname: string;

    @ApiProperty({ default: '' })
    @IsString()
    @IsOptional()
    nickname: string;

    @ApiProperty({ default: '' })
    @IsString()
    @IsOptional()
    gender: string;

    @ApiProperty({ default: format(new Date(), 'yyyy-MM-dd') })
    @IsString()
    @IsOptional()
    date_of_birth: Date;

    @ApiProperty({ default: '' })
    @IsString()
    @IsOptional()
    address: string;

    @ApiProperty({ default: '' })
    @IsString()
    @IsOptional()
    precinct_no: string;

    @ApiProperty({ default: '' })
    @IsString()
    @IsOptional()
    vin_no: string;

    @ApiProperty({ default: '' })
    @IsString()
    @IsOptional()
    status: string;

    @ApiProperty({ default: '' })
    @IsString()
    @IsOptional()
    category: string;

    @ApiProperty({ default: '' })
    @IsString()
    @IsOptional()
    vote_group: string;

    @ApiProperty({ default: '' })
    @IsString()
    @IsOptional()
    vote_type: string;

    @ApiProperty({ default: '' })
    @IsString()
    @IsOptional()
    vote_status: string;

    @ApiProperty({ default: '' })
    @IsString()
    @IsOptional()
    latitude: string;

    @ApiProperty({ default: '' })
    @IsString()
    @IsOptional()
    longitude: string;

    @ApiProperty({ default: { id: '' } })
    @IsObject()
    @IsOptional()
    barangay: AreaBarangayInterface;

    @ApiProperty({ default: { id: '' } })
    @IsObject()
    @IsOptional()
    purok: AreaPurokInterface;

    @ApiProperty({ default: false })
    @IsBoolean()
    verified_voter: boolean;

    @ApiProperty({ default: false })
    @IsBoolean()
    confirmed_leader: boolean;

    @ApiProperty({ default: false })
    @IsBoolean()
    unassigned_voter: boolean;
}