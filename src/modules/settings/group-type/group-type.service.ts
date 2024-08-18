import { Injectable, NotFoundException } from "@nestjs/common";
import { throwError } from "rxjs";
import { ResponseGroupTypeDto } from "src/dto";
import { CreateGroupTypeDto } from "src/dto/group-type/create-group-type.dto";
import { UpdateGroupTypeDto } from "src/dto/group-type/update-group-type.dto";
import { GroupTypeEntity } from "src/entity/group-type/group-type.entity";
import { DataSource } from "typeorm";

@Injectable()
export class GroupTypeService {

    constructor(private readonly datasource: DataSource) { }

    async getGroupTypes() {
        const data = await this.datasource.manager.find(GroupTypeEntity);
        return this.responseDtoArray(data);
    }

    async getGroupTypeById(id: string) {
        const data = await this.datasource.manager.findOne(GroupTypeEntity, {
            where: {
                id: id
            }
        });
        return this.responseDto(data);
    }

    createGroupType(dto: CreateGroupTypeDto) {
        var model = this.datasource.manager.create(GroupTypeEntity, dto);
        return this.datasource.manager.save(GroupTypeEntity, model);
    }

    updateGroupType(id: string, dto: UpdateGroupTypeDto) {
        return this.datasource.manager.update(GroupTypeEntity, id, { ...dto })
    }

    async deleteGroupType(id: string) {
        var grouptype = await this.datasource.manager.findOne(GroupTypeEntity, {
            where: {
                id: id
            }
        });
        if (grouptype) {
            return this.datasource.manager.remove(grouptype);
        }
        throw new NotFoundException(id);
    }

    private responseDto(entity: GroupTypeEntity): ResponseGroupTypeDto {
        return Object.assign(new ResponseGroupTypeDto(), (({
            created_at, updated_at, ...rest
        }) => ({
            ...rest
        }))(entity));
    }

    private responseDtoArray(entity: GroupTypeEntity[]): ResponseGroupTypeDto[] {
        const rDto: ResponseGroupTypeDto[] = [];
        entity.forEach(e => {
            rDto.push(Object.assign(new ResponseGroupTypeDto(), (({
                created_at, updated_at, ...rest
            }) => ({
                ...rest
            }))(e)))
        });
        return rDto;
    }

}