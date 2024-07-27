import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateVoterLeaderSubDto, UpdateVoterLeaderSubDto } from "src/dto";
import { VoterLeaderSubEntity } from "src/entity/voter-leader-sub/voter-leader-sub.entity";
import { DataSource } from "typeorm";

@Injectable()
export class VoterLeaderSubService {

    constructor(private readonly datasource: DataSource) { }

    async getAll() {
        return await this.datasource.manager.find(VoterLeaderSubEntity);
    }

    async getById(id: string) {
        return await this.datasource.manager.findOne(VoterLeaderSubEntity, {
            where: {
                id: id
            }
        });
    }

    async create(dto: CreateVoterLeaderSubDto) {
        const model = this.datasource.manager.create(VoterLeaderSubEntity, dto);
        return await this.datasource.manager.save(VoterLeaderSubEntity, model);
    }

    async update(id: string, dto: UpdateVoterLeaderSubDto) {
        return await this.datasource.manager.update(VoterLeaderSubEntity, id, { ...dto });
    }

    async delete(id: string) {
        const data = await this.getById(id);
        if (data) {
            return this.datasource.manager.remove(VoterLeaderSubEntity, data);
        }
        return new NotFoundException();
    }
}