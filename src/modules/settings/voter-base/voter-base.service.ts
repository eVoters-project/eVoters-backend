import { Injectable } from "@nestjs/common";
import { CreateVoterBaseDto, ResponseVoterBaseDto, UpdateVoterBaseDto, UpdateVoterDto } from "src/dto";
import { VoterBaseEntity } from "src/entity/voter-base/voter-base.entity";
import { DataSource } from "typeorm";

@Injectable()
export class VoterBaseService {

    constructor(private readonly datasource: DataSource) { }

    async getAll() {
        const data = await this.datasource.manager.find(VoterBaseEntity);
        return this.responseDtoArray(data);
    }

    async getById(id: string) {
        const data = await this.datasource.manager.findOne(VoterBaseEntity, {
            where: {
                id: id
            }
        });
        return this.responseDto(data);
    }

    async create(dto: CreateVoterBaseDto) {
        const model = this.datasource.manager.create(VoterBaseEntity, dto);
        const data = await this.datasource.manager.save(VoterBaseEntity, model);
        return this.responseDto(data);
    }

    async update(id: string, dto: UpdateVoterBaseDto) {
        return await this.datasource.manager.update(VoterBaseEntity, id, { ...dto });
    }

    async delete(id: string) {
        const data = await this.getById(id);

        if (data) {
            return this.datasource.manager.remove(VoterBaseEntity, data);
        }
    }

    private responseDto(entity: VoterBaseEntity): ResponseVoterBaseDto {
        return Object.assign(new ResponseVoterBaseDto(), (({
            id, code, description
        }) => ({
            id, code, description
        }))(entity));
    }

    private responseDtoArray(entity: VoterBaseEntity[]): ResponseVoterBaseDto[] {
        const rDto: ResponseVoterBaseDto[] = [];
        entity.forEach(e => {
            rDto.push(Object.assign(new ResponseVoterBaseDto(), (({
                id, code, description
            }) => ({
                id, code, description
            }))(e)))
        });
        return rDto;
    }

}