import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
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
        return 'Fetching Vote-Counts';
    }

}