import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class LoginRequestDto {

    @ApiProperty({
        default: ''
    })
    @IsNotEmpty()
    username: string;
    
    @ApiProperty({
        default: ''
    })
    @IsNotEmpty()
    password: string;
}