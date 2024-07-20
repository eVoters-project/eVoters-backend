import { Injectable } from "@nestjs/common";
import { CreateVoterBaseDto, UpdateVoterBaseDto, UpdateVoterDto } from "src/dto";
import { VoterBaseEntity } from "src/entity/voter-base/voter-base.entity";
import { DataSource } from "typeorm";

@Injectable()
export class VoterBaseService {

    constructor(private readonly datasource: DataSource) { }

    async getAll() {
        return await this.datasource.manager.find(VoterBaseEntity);
    }

    async getById(id: string) {
        return await this.datasource.manager.findOne(VoterBaseEntity, {
            where: {
                id: id
            }
        });
    }

    async create(dto: CreateVoterBaseDto) {
        const model = this.datasource.manager.create(VoterBaseEntity, dto);
        return await this.datasource.manager.save(VoterBaseEntity, model);
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

}