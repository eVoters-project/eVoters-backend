import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
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
        return 'Fetching Voters';
    }

}