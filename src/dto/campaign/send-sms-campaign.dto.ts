import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsString } from "class-validator";

export class SendSMSCampaignDto {
    @ApiProperty({ default: [] })
    @IsArray()
    number: string[];

    @ApiProperty({ default: 'My vote message' })
    @IsString()
    message: string;
}