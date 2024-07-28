import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { PartyService } from "./party.service";
import { CreatePartyDto, UpdatePartyDto } from "src/dto";

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

    @Post()
    @ApiBody({
        type: CreatePartyDto
    })
    create(@Body() body: CreatePartyDto) {
        return this.service.create(body);
    }

    @Patch(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    @ApiBody({
        type: UpdatePartyDto
    })
    update(@Param('id') id: string, @Body() body: UpdatePartyDto) {
        return this.service.update(id, body);
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