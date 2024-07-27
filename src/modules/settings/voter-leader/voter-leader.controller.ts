import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { ApiBody, ApiParam, ApiQuery, ApiTags } from "@nestjs/swagger";
import { VoterLeaderService } from "./voter-leader.service";
import { CreateVoterLeaderDto, QueryVoterLeaderDto, UpdateVoterLeaderDto } from "src/dto";

@ApiTags('Voter Leader')
@Controller({
    path: 'setup-voter-leader',
    version: '1'
})
export class VoterLeaderController {

    constructor(private readonly service: VoterLeaderService) { }

    @Get()
    @ApiQuery({
        type: QueryVoterLeaderDto
    })
    getAll(@Query() query: object) {
        if (Object.keys(query).length) {
            return this.service.getByQuery(query);
        } else {
            return this.service.getAll();
        }
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
        type: CreateVoterLeaderDto
    })
    create(@Body() body: CreateVoterLeaderDto) {
        return this.service.create(body);
    }

    @Patch(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    @ApiBody({
        type: UpdateVoterLeaderDto
    })
    update(@Param('id') id: string, @Body() body: UpdateVoterLeaderDto) {
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