import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { VotersService } from "./voters.service";
import { CreateVoterDto } from "src/dto";

@ApiTags('Voters')
@Controller({
    path: 'voters',
    version: '1'
})
export class VotersController {

    constructor(private service: VotersService) {}

    @Get()
    getVoters() {
        return this.service.getVoters();
    }

    @Get(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    getVoterById(@Param('id') id: string) {
        return this.service.getVoterById(id);
    }

    @Post()
    @ApiBody({
        type: CreateVoterDto
    })
    createVoter(@Body() body: CreateVoterDto) {
        return this.service.createVoter(body);
    }

    @Delete(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    deleteVoter(@Param('id') id: string) {
        return this.service.deleteVoter(id);
    }
}