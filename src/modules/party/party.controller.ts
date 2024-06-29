import { Controller, Delete, Get, Param } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
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
        return this.service.getParties();
    }

    @Get(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    getPartyById(@Param('id') id: string) {
        return this.service.getPartyById(id);
    }

    @Delete(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    deleteParty(@Param('id') id: string) {
        return this.service.deleteParty(id);
    }
    
}