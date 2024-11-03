import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ElectionPositionService } from "./election-position.service";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { CreateElectionPositionDto, UpdateElectionPositionDto } from "src/dto";

@ApiTags('Election Positions')
@Controller({
    path: 'setup-election-position',
    version: '1'
})
export class ElectionPositionController {

    constructor(private readonly service: ElectionPositionService) { }

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
        type: CreateElectionPositionDto
    })
    create(@Body() body: CreateElectionPositionDto) {
        return this.service.create(body);
    }

    @Patch(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    @ApiBody({
        type: UpdateElectionPositionDto
    })
    update(@Param('id') id: string, @Body() body: UpdateElectionPositionDto) {
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