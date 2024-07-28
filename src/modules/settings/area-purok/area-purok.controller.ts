import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { AreaPurokService } from "./area-purok.service";
import { CreateAreaPurokDto, UpdateAreaPurokDto } from "src/dto";

@ApiTags('Area Purok')
@Controller({
    path: 'setup-area-purok',
    version: '1'
})
export class AreaPurokController {

    constructor(private readonly service: AreaPurokService) { }

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
        type: CreateAreaPurokDto
    })
    create(@Body() body: CreateAreaPurokDto) {
        return this.service.create(body);
    }

    @Patch(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    @ApiBody({
        type: UpdateAreaPurokDto
    })
    update(@Param('id') id: string, @Body() body: UpdateAreaPurokDto) {
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