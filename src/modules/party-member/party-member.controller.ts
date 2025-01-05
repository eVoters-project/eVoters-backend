import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { PartyMemberService } from "./party-member.service";
import { CreatePartyMemberDto, UpdatePartyMemberDto } from "src/dto";

@ApiTags('Party Member')
@Controller({
    path: 'party-member',
    version: '1'
})
export class PartyMemberController {

    constructor(private service: PartyMemberService) { }

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

    @Get('party/:id')
    @ApiParam({
        name: 'id',
        required: true
    })
    getByParty(@Param('id') id: string) {
        return this.service.getByParty(id);
    }

    @Post()
    @ApiBody({
        type: CreatePartyMemberDto
    })
    create(@Body() body: CreatePartyMemberDto) {
        return this.service.create(body);
    }

    @Patch(':id')
    @ApiParam({
        name: 'id',
        required: true
    })
    @ApiBody({
        type: UpdatePartyMemberDto
    })
    update(@Param('id') id: string, @Body() body: UpdatePartyMemberDto) {
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