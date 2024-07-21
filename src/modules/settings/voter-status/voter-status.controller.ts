import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { VoterStatusService } from "./voter-status.service";
import { CreateVoterStatusDto, UpdateVoterStatusDto } from "src/dto";

@ApiTags('Voter Status')
@Controller({
    path: 'setup-voter-status',
    version: '1'
})
export class VoterStatusController {

    constructor(private readonly service: VoterStatusService) { }

    @Get()
    getAll() {
        return this.service.getAll();
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.service.getById(id);
    }

    @Post()
    @ApiBody({
        type: CreateVoterStatusDto
    })
    create(@Body() body: CreateVoterStatusDto) {
        return this.service.create(body);
    }

    @Patch(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    @ApiBody({
        type: UpdateVoterStatusDto
    })
    update(@Param('id') id: string, @Body() body: UpdateVoterStatusDto) {
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