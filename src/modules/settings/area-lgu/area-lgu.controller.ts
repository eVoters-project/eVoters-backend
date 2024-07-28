import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { AreaLGUService } from "./area-lgu.service";
import { CreateAreaLGUDto, UpdateAreaLGUDto } from "src/dto";

@ApiTags('Area LGU')
@Controller({
    path: 'setup-area-lgu',
    version: '1'
})
export class AreaLGUController {

    constructor(private readonly service: AreaLGUService) { }

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
        type: CreateAreaLGUDto
    })
    create(@Body() body: CreateAreaLGUDto) {
        return this.service.create(body);
    }

    @Patch(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    @ApiBody({
        type: UpdateAreaLGUDto
    })
    update(@Param('id') id: string, @Body() body: UpdateAreaLGUDto) {
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