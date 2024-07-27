import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { VoterLeaderSubService } from "./voter-leader-sub.service";
import { CreateVoterLeaderSubDto, UpdateVoterLeaderSubDto } from "src/dto";

@ApiTags('Voter Leader Sub')
@Controller({
    path: 'setup-voter-leader-sub',
    version: '1'
})
export class VoterLeaderSubController {

    constructor(private readonly service: VoterLeaderSubService) { }

    @Get()
    getAll() {
        return this.service.getAll();
    }

    @Get(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    getById(@Param('id') id: string) {
        return this.service.getById(id);
    }

    @Post()
    @ApiBody({
        type: CreateVoterLeaderSubDto
    })
    create(@Body() body: CreateVoterLeaderSubDto) {
        return this.service.create(body);
    }

    @Patch(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    @ApiBody({
        type: UpdateVoterLeaderSubDto
    })
    update(@Param('id') id: string, @Body() body: UpdateVoterLeaderSubDto) {
        return this.service.update(id, body);
    }

    @Delete(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    delete(@Param('id') id: string) {
        return this.service.delete(id);
    }
}