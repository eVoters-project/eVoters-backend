import { Controller, Delete, Get, Param } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { VoteCountService } from "./vote-count.service";

@ApiTags('Vote - Count')
@Controller({
    path: 'vote-count',
    version: '1'
})
export class VoteCountController {

    constructor(private service: VoteCountService) {}

    @Get()
    getVoteCounts() {
        return this.service.getVoteCounts();
    }

    @Get(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    getVoteCountById(@Param('id') id: string) {
        return this.service.getVoteCountById(id);
    }

    @Delete(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    deleteVoteCount(@Param('id') id: string) {
        return this.service.deleteVoteCount(id);
    }

}