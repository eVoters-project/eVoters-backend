import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
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
        return 'Fetching Straw-Votes';
    }

}