import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { VoterInfluenceSubService } from "./voter-influence-sub.service";
import { CreateVoterInfluenceSubDto } from "src/dto/voter-influence-sub/create-voter-influence-sub.dto";
import { UpdateVoterInfluenceSubDto } from "src/dto/voter-influence-sub/update-voter-influence-sub.dto";

@ApiTags('Voter Influence Sub')
@Controller({
    path: 'setup-voter-influence-sub',
    version: '1'
})
export class VoterInfluenceSubController {

    constructor(private readonly service: VoterInfluenceSubService) { }

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
        type: CreateVoterInfluenceSubDto
    })
    create(@Body() body: CreateVoterInfluenceSubDto) {
        return this.service.create(body)
    }

    @Patch(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    @ApiBody({
        type: UpdateVoterInfluenceSubDto
    })
    update(@Param('id') id: string, @Body() body: UpdateVoterInfluenceSubDto) {
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