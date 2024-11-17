import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsInt, IsObject, IsString } from "class-validator";
import { AreaBarangayInterface } from "src/interface";
import { ElectionPrecinctInterface } from "src/interface/entity/election-precinct/election-precinct.interface";

export class CreateElectionPrecinctDto implements ElectionPrecinctInterface {

    @ApiProperty({ default: 0 })
    @IsInt()
    sequence: number;

    @ApiProperty({ default: '' })
    @IsString()
    code: string;

    @ApiProperty({ default: 0 })
    @IsInt()
    cluster: number;

    @ApiProperty({ default: '' })
    @IsString()
    sub_cluster: string;

    @ApiProperty({ default: '' })
    @IsString()
    polling_center: string;

    @ApiProperty({ default: { id: '' } })
    @IsObject()
    area_barangay: AreaBarangayInterface;

    @ApiProperty({ default: 'Active' })
    @IsString()
    status: string;
}