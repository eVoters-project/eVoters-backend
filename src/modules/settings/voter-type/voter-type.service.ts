import { Injectable } from "@nestjs/common";
import { CreateVoterTypeDto, ResponseVoterTypeDto, UpdateVoterTypeDto } from "src/dto";
import { VoterTypeEntity } from "src/entity";
import { DataSource } from "typeorm";

@Injectable()
export class VoterTypeService {

    constructor(private readonly datasource: DataSource) { }

    async getAll() {
        const data = await this.datasource.manager.find(VoterTypeEntity);
        return this.responseDtoArray(data);
    }

    async getById(id: string) {
        const data = await this.datasource.manager.findOne(VoterTypeEntity, {
            where: {
                id: id
            }
        });
        return this.responseDto(data);
    }

    async create(dto: CreateVoterTypeDto) {
        const model = this.datasource.manager.create(VoterTypeEntity, dto);
        const data = await this.datasource.manager.save(VoterTypeEntity, model);
        return this.responseDto(data);
    }

    async update(id: string, dto: UpdateVoterTypeDto) {
        return this.datasource.manager.update(VoterTypeEntity, id, { ...dto });
    }

    async delete(id: string) {
        const data = await this.getById(id);
        if (data) {
            return this.datasource.manager.remove(VoterTypeEntity, data);
        }
    }

    private responseDto(entity: VoterTypeEntity): ResponseVoterTypeDto {
        return Object.assign(new ResponseVoterTypeDto(), (({
            id, code, description
        }) => ({
            id, code, description
        }))(entity));
    }

    private responseDtoArray(entity: VoterTypeEntity[]): ResponseVoterTypeDto[] {
        const rDto: ResponseVoterTypeDto[] = [];
        entity.forEach(e => {
            rDto.push(Object.assign(new ResponseVoterTypeDto(), (({
                id, code, description
            }) => ({
                id, code, description
            }))(e)))
        });
        return rDto;
    }
}