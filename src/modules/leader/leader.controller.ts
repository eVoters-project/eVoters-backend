import { Controller, Delete, Get, Param } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { LeaderService } from "./leader.service";

@ApiTags('Leader')
@Controller({
    path: 'leader',
    version: '1'
})
export class LeaderController {

    constructor(private service: LeaderService) {}

    @Get()
    getLeaders() {
        return this.service.getLeaders();
    }

    @Get(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    getLeaderById(@Param('id') id: string) {
        return this.service.getLeaderById(id);
    }

    @Delete(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    deleteLeader(@Param('id') id: string) {
        return this.service.deleteLeader(id);
    }
    
}