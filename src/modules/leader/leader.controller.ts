import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
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
        return 'Fetching Leaders';
    }
    
}