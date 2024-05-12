import { Controller, Get, Param } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { UserService } from "./user.service";

@ApiTags('User')
@Controller({
    path: 'user',
    version: '1'
})
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get()
    getusers() {
        
    }

    @Get(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    getUser(@Param('id') id: any) {

    }

}