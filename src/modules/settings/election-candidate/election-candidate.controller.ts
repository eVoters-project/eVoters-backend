import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ElectionCandidateService } from "./election-candidate.service";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { CreateElectionCandidateDto, UpdateElectionCandidateDto } from "src/dto";

@ApiTags('Election Candidate')
@Controller({
    path: 'election-candidate',
    version: '1'
})
export class ElectionCandidateController {

    constructor(private readonly service: ElectionCandidateService) { }

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

    @Get('position/:id')
    @ApiParam({
        name: 'id',
        required: true
    })
    getByPosition(@Param('id') id: string) {
        return this.service.getByPosition(id);
    }

    @Post()
    @ApiBody({
        type: CreateElectionCandidateDto
    })
    create(@Body() body: CreateElectionCandidateDto) {
        return this.service.create(body);
    }

    @Patch(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    @ApiBody({
        type: UpdateElectionCandidateDto
    })
    update(@Param('id') id: string, @Body() body: UpdateElectionCandidateDto) {
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