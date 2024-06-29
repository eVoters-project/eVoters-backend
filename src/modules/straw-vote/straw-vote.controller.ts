import { Controller, Delete, Get, Param } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { StrawVoteService } from "./straw-vote.service";

@ApiTags('Straw - Votes')
@Controller({
    path: 'straw-vote',
    version: '1'
})
export class StrawVoteController {

    constructor(private service: StrawVoteService) {}

    @Get()
    getStrawVotes() {
        return this.service.getStrawVotes();
    }

    @Get(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    getStrawVoteById(@Param('id') id: string) {
        return this.service.getStrawVoteById(id);
    }

    @Delete(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    deleteStrawVote(@Param('id') id: string) {
        return this.service.deleteStrawVote(id);
    }

}