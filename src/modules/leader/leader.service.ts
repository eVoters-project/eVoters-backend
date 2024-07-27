import { HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateLeaderDto, UpdateLeaderDto } from "src/dto";
import { LeaderEntity } from "src/entity";
import { DataSource } from "typeorm";

@Injectable()
export class LeaderService {

    constructor(private datasource: DataSource) { }

    async getAll() {
        return await this.datasource.manager.find(LeaderEntity);
    }

    async getById(id: string) {
        return await this.datasource.manager.findOne(LeaderEntity, {
            where: {
                id: id
            }
        })
    }

    async create(dto: CreateLeaderDto) {
        const model = this.datasource.manager.create(LeaderEntity, dto);
        return await this.datasource.manager.save(LeaderEntity, model);
    }

    async update(id: string, dto: UpdateLeaderDto) {
        return await this.datasource.manager.update(LeaderEntity, id, { ...dto });
    }

    async delete(id: string) {
        var leader = await this.getById(id);

        if (leader) {
            return this.datasource.manager.remove(LeaderEntity, leader);
        }
        return new NotFoundException();
    }
}