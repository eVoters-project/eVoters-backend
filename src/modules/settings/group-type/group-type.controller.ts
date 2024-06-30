import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { GroupTypeService } from "./group-type.service";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { CreateGroupTypeDto } from "src/dto/group-type/create-group-type.dto";
import { UpdateGroupTypeDto } from "src/dto/group-type/update-group-type.dto";

@ApiTags('Group Type')
@Controller({ path: 'settings-group-type', version: '1' })
export class GroupTypeController {

    constructor(private readonly service: GroupTypeService) {}

    @Get()
    getGroupTypes() {
        return this.service.getGroupTypes();
    }

    @Get(':id')
    getGroupTypeById(@Param('id') id: string) {
        return this.service.getGroupTypeById(id);
    }

    @Post()
    @ApiBody({
        type: CreateGroupTypeDto
    })
    createGroupType(@Body() body: CreateGroupTypeDto) {
        return this.service.createGroupType(body);
    }

    @Patch(':id')
    @ApiBody({
        type: UpdateGroupTypeDto
    })
    updateGroupType(@Param('id') id: string, body: UpdateGroupTypeDto) {
        return this.service.updateGroupType(id, body);
    }

    @Delete(':id')
    deleteGroupType(@Param('id') id: string) {
        return this.service.deleteGroupType(id);
    }
}