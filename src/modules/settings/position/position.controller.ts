import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { ApiBody, ApiParam, ApiQuery, ApiTags } from "@nestjs/swagger";
import { PositionService } from "./position.service";
import { CreatePositionDto, UpdatePositionDto } from "src/dto";

@ApiTags('Position')
@Controller({
    path: 'setup-position',
    version: '1'
})
export class PositionController {

    constructor(private readonly service: PositionService) { }

    @Get()
    @ApiQuery({
        name: 'level',
        required: false,
        enum: ['National', 'Local']
    })
    @ApiQuery({
        name: 'election_cycle',
        required: false,
        enum: ['Presidential', 'Midterm']
    })
    getAll(@Query() query: any) {
        if (Object.keys(query).length > 0) {
            return this.service.getByQuery(query);
        }
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
        type: CreatePositionDto
    })
    create(@Body() body: CreatePositionDto) {
        return this.service.create(body);
    }

    @Patch(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    @ApiBody({
        type: UpdatePositionDto
    })
    update(@Param('id') id: string, @Body() body: UpdatePositionDto) {
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