import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ElectionTallyService } from "./election-tally.service";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { CreateElectionTallyDto, UpdateElectionTallyDto } from "src/dto";

@ApiTags('Election Tally')
@Controller({
    path: 'trx-election-tally',
    version: '1'
})
export class ElectionTallyController {

    constructor(private readonly service: ElectionTallyService) { }

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

    @Get('schedule/:id')
    @ApiParam({
        name: 'id',
        required: true
    })
    getBySchedule(@Param('id') id: string) {
        return this.service.getBySchedule(id);
    }

    @Post()
    @ApiBody({
        type: CreateElectionTallyDto
    })
    create(@Body() body: CreateElectionTallyDto) {
        return this.service.create(body);
    }

    @Patch(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    @ApiBody({
        type: UpdateElectionTallyDto
    })
    update(@Param('id') id: string, @Body() body: UpdateElectionTallyDto) {
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