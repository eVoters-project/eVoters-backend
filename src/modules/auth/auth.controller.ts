import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { LoginRequestDto } from "./dto/login-request.dto";

@ApiTags('Authorization')
@Controller({
    path: 'auth',
    version: '1'
})
export class AuthController {

    @Post()
    @ApiBody({
        type: LoginRequestDto
    })
    async login(@Body() body: LoginRequestDto) {
        console.log(body);
    }

 }