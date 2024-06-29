import { Controller, Delete, Get, Param } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { VotersService } from "./voters.service";

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

    @Delete(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    deleteVoter(@Param('id') id: string) {
        return this.service.deleteVoter(id);
    }
}