import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { AreaBarangayService } from "./area-barangay.service";
import { CreateAreaBarangayDto, UpdateAreaBarangayDto } from "src/dto";

@ApiTags('Area Barangay')
@Controller({
    path: 'setup-area-barangay',
    version: '1'
})
export class AreaBarangayController {

    constructor(private readonly service: AreaBarangayService) { }

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
        type: CreateAreaBarangayDto
    })
    create(@Body() body: CreateAreaBarangayDto) {
        return this.service.create(body);
    }

    @Patch(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    @ApiBody({
        type: UpdateAreaBarangayDto
    })
    update(@Param('id') id: string, @Body() body: UpdateAreaBarangayDto) {
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