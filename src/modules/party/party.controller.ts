import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { PartyService } from "./party.service";

@ApiTags('Party')
@Controller({
    path: 'party',
    version: '1'
})
export class PartyController {

    constructor(private service: PartyService) {}

    @Get()
    getParties() {
        return 'Fetching Parties';
    }
    
}