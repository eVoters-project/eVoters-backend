import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ElectionPrecinctService } from "./election-precinct.service";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { CreateElectionPrecinctDto } from "src/dto/election-precinct/create-election-precinct.dto";
import { UpdateElectionPrecinctDto } from "src/dto/election-precinct/update-election-precinct.dto";

@ApiTags('Election Precinct')
@Controller({
    path: 'setup-election-precinct',
    version: '1'
})
export class ElectionPrecinctController {

    constructor(private readonly service: ElectionPrecinctService) { }

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
        type: CreateElectionPrecinctDto
    })
    create(@Body() body: CreateElectionPrecinctDto) {
        return this.service.create(body);
    }

    @Patch(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    @ApiBody({
        type: UpdateElectionPrecinctDto
    })
    update(@Param('id') id: string, @Body() body: UpdateElectionPrecinctDto) {
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