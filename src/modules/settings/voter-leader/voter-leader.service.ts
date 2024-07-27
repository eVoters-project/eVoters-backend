import { Injectable, NotFoundException } from "@nestjs/common";
import { NotFoundError, throwError } from "rxjs";
import { CreateVoterLeaderDto, QueryVoterLeaderDto, UpdateVoterLeaderDto } from "src/dto";
import { VoterLeaderEntity } from "src/entity/voter-leader/voter-leader.entity";
import { DataSource } from "typeorm";

@Injectable()
export class VoterLeaderService {

    constructor(private readonly datasource: DataSource) { }

    async getAll() {
        return this.datasource.manager.find(VoterLeaderEntity, {
            relations: {
                voter_leader_sub: true
            }
        });
    }

    async getById(id: string) {
        return await this.datasource.manager.findOne(VoterLeaderEntity, {
            relations: {
                voter_leader_sub: true
            },
            where: {
                id: id
            }
        });
    }

    async getByQuery(dto: QueryVoterLeaderDto) {
        const { code, description, voter_leader_sub_id } = dto;
        return await this.datasource.manager.find(VoterLeaderEntity, {
            relations: {
                voter_leader_sub: true
            },
            where: {
                code: code,
                description: description,
                voter_leader_sub: {
                    id: voter_leader_sub_id
                }
            }
        })
    }

    async create(dto: CreateVoterLeaderDto) {
        const model = this.datasource.manager.create(VoterLeaderEntity, dto);
        return await this.datasource.manager.save(VoterLeaderEntity, model);
    }

    async update(id: string, dto: UpdateVoterLeaderDto) {
        return this.datasource.manager.update(VoterLeaderEntity, id, { ...dto });
    }

    async delete(id: string) {
        const data = await this.getById(id);
        if (data) {
            return this.datasource.manager.remove(VoterLeaderEntity, data);
        }
        return new NotFoundException();
    }
}