import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { VoterBaseService } from "./voter-base.service";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { CreateVoterBaseDto, UpdateVoterBaseDto } from "src/dto";

@ApiTags('Voter Base')
@Controller({
    path: 'setup-voter-base',
    version: '1'
})
export class VoterBaseController {

    constructor(private readonly service: VoterBaseService) { }

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
        type: CreateVoterBaseDto
    })
    create(@Body() body: CreateVoterBaseDto) {
        return this.service.create(body);
    }

    @Patch(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    @ApiBody({
        type: UpdateVoterBaseDto
    })
    update(@Param('id') id: string, @Body() body: UpdateVoterBaseDto) {
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