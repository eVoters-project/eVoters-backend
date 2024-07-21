import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { VoterPositionService } from "./voter-position.service";
import { CreateVoterPositionDto, UpdateVoterPositionDto } from "src/dto";

@ApiTags('Voter Position')
@Controller({
    path: 'setup-voter-position',
    version: '1'
})
export class VoterPositionController {

    constructor(private readonly service: VoterPositionService) { }

    @Get()
    getAll() {
        return this.service.getAll();
    }

    @Get(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    getById(@Param('id') id: any) {
        return this.service.getById(id);
    }

    @Post()
    @ApiBody({
        type: CreateVoterPositionDto
    })
    create(@Body() body: CreateVoterPositionDto) {
        return this.service.create(body);
    }

    @Patch(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    @ApiBody({
        type: UpdateVoterPositionDto
    })
    update(@Param('id') id: string, @Body() body: UpdateVoterPositionDto) {
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