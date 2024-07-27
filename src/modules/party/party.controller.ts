import { Controller, Delete, Get, Param } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { PartyService } from "./party.service";

@ApiTags('Party')
@Controller({
    path: 'party',
    version: '1'
})
export class PartyController {

    constructor(private service: PartyService) { }

    @Get()
    getAll() {
        return this.service.getAll();
    }

    @Get(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    getById(@Param('id') id: string) {
        return this.service.getById(id);
    }

    @Delete(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    delete(@Param('id') id: string) {
        return this.service.delete(id);
    }

}