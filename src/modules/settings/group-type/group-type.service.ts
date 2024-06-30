import { Injectable, NotFoundException } from "@nestjs/common";
import { throwError } from "rxjs";
import { CreateGroupTypeDto } from "src/dto/group-type/create-group-type.dto";
import { UpdateGroupTypeDto } from "src/dto/group-type/update-group-type.dto";
import { GroupTypeEntity } from "src/entity/group-type/group-type.entity";
import { DataSource } from "typeorm";

@Injectable()
export class GroupTypeService {

    constructor(private readonly datasource: DataSource) {}

    getGroupTypes() {
        return this.datasource.manager.find(GroupTypeEntity);
    }

    getGroupTypeById(id: string) {
        return this.datasource.manager.findOne(GroupTypeEntity, {
            where: {
                id: id
            }
        });
    }

    createGroupType(dto: CreateGroupTypeDto) {
        var model = this.datasource.manager.create(GroupTypeEntity, dto);
        return this.datasource.manager.save(GroupTypeEntity, model);
    }

    updateGroupType(id: string, dto: UpdateGroupTypeDto) {
        return this.datasource.manager.update(GroupTypeEntity, id, { ...dto })
    }

    async deleteGroupType(id: string) {
        var grouptype = await this.getGroupTypeById(id);
        if (grouptype) {
            return this.datasource.manager.remove(grouptype);
        }
        throw new NotFoundException(id);
    }

}