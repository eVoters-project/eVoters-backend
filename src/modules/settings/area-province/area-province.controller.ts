import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { AreaProvinceService } from "./area-province.service";
import { CreateAreaProvinceDto, UpdateAreaProvinceDto } from "src/dto";

@ApiTags('Area Province')
@Controller({
    path: 'setup-area-province',
    version: '1'
})
export class AreaProvinceController {

    constructor(private readonly service: AreaProvinceService) { }

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
        type: CreateAreaProvinceDto
    })
    create(@Body() body: CreateAreaProvinceDto) {
        return this.service.create(body);
    }

    @Patch(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    @ApiBody({
        type: UpdateAreaProvinceDto
    })
    update(@Param('id') id: string, @Body() body: UpdateAreaProvinceDto) {
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