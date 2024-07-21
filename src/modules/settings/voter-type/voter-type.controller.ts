import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { VoterTypeService } from "./voter-type.service";
import { CreateVoterTypeDto, UpdateVoterTypeDto } from "src/dto";

@ApiTags('Voter Type')
@Controller({
    path: 'setup-voter-type',
    version: '1'
})
export class VoterTypeController {

    constructor(private readonly service: VoterTypeService) { }

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
        type: CreateVoterTypeDto
    })
    create(@Body() body: CreateVoterTypeDto) {
        return this.service.create(body);
    }

    @Patch(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    @ApiBody({
        type: UpdateVoterTypeDto
    })
    update(@Param('id') id: string, @Body() body: UpdateVoterTypeDto) {
        return this.service.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.service.delete(id);
    }

}