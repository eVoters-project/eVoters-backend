import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsNumber, IsNumberString, IsOptional, IsString } from "class-validator";
import { format } from "date-fns";
import { CampaignInterface } from "src/interface";

export class CreateCampaignDto implements CampaignInterface {
    @ApiProperty({ default: '' })
    @IsString()
    code: string;

    @ApiProperty({ default: format(new Date(), 'yyyy-MM-dd hh:mm:ss aa') })
    @IsString()
    when: Date;

    @ApiProperty({ default: '' })
    @IsString()
    what: string;

    @ApiProperty({ default: '' })
    @IsString()
    where: string;

    @ApiProperty({ default: '' })
    @IsString()
    remarks: string;

    @ApiProperty({ default: 'Active' })
    @IsString()
    status: string;

    @ApiProperty({ default: 0 })
    @IsNumber()
    @IsOptional()
    attendees: number;
}