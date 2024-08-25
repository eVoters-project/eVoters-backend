import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ElectionScheduleService } from "./election-schedule.service";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { CreateElectionScheduleDto } from "src/dto/election-schedule/create-election-schedule.dto";
import { UpdateElectionScheduleDto } from "src/dto/election-schedule/update-election-schedule.dto";

@ApiTags('Election Schedule')
@Controller({
    path: 'setup-election-schedule',
    version: '1'
})
export class ElectionScheduleController {

    constructor(private readonly service: ElectionScheduleService) { }

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
        type: CreateElectionScheduleDto
    })
    create(@Body() body: CreateElectionScheduleDto) {
        return this.service.create(body);
    }

    @Patch(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    @ApiBody({
        type: UpdateElectionScheduleDto
    })
    update(@Param('id') id: string, @Body() body: UpdateElectionScheduleDto) {
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