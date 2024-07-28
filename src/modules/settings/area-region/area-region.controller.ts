import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { AreaRegionService } from "./area-region.service";
import { CreateAreaRegionDto, UpdateAreaRegionDto } from "src/dto";

@ApiTags('Area Region')
@Controller({
    path: 'setup-area-region',
    version: '1'
})
export class AreaRegionController {

    constructor(private readonly service: AreaRegionService) { }

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
        type: CreateAreaRegionDto
    })
    create(@Body() body: CreateAreaRegionDto) {
        return this.service.create(body);
    }

    @Patch(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    @ApiBody({
        type: UpdateAreaRegionDto
    })
    update(@Param('id') id: string, @Body() body: UpdateAreaRegionDto) {
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