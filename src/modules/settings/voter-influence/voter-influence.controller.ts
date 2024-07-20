import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { VoterInfluenceService } from "./voter-influence.service";
import { CreateVoterInfluenceDto, UpdateVoterInfluenceDto } from "src/dto";

@ApiTags('Voter Influence')
@Controller({
    path: 'setup-voter-influence',
    version: '1'
})
export class VoterInfluenceController {

    constructor(private readonly service: VoterInfluenceService) { }

    @Get()
    getAll() {
        return this.service.getAll();
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.service.getById(id);
    }

    @Post()
    @ApiBody({
        type: CreateVoterInfluenceDto
    })
    create(@Body() body: CreateVoterInfluenceDto) {
        return this.service.create(body);
    }

    @Patch(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    @ApiBody({
        type: UpdateVoterInfluenceDto
    })
    update(@Param('id') id: string, @Body() body: UpdateVoterInfluenceDto) {
        return this.service.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.service.delete(id);
    }

}