import { Injectable } from "@nestjs/common";
import { CreateVoterInfluenceSubDto } from "src/dto/voter-influence-sub/create-voter-influence-sub.dto";
import { ResponseVoterInfluenceSubDto } from "src/dto/voter-influence-sub/response-voter-influence-sub.dto";
import { UpdateVoterInfluenceSubDto } from "src/dto/voter-influence-sub/update-voter-influence-sub.dto";
import { VoterInfluenceSubEntity } from "src/entity/voter-influence-sub/voter-influence-sub.entity";
import { DataSource } from "typeorm";

@Injectable()
export class VoterInfluenceSubService {

    constructor(private readonly datasource: DataSource) { }

    async getAll() {
        const data = await this.datasource.manager.find(VoterInfluenceSubEntity, {
            relations: {
                voter_influence: true
            }
        });
        return this.responseDtoArray(data);
    }

    async getById(id: string) {
        const data = await this.datasource.manager.findOne(VoterInfluenceSubEntity, {
            relations: {
                voter_influence: true
            },
            where: {
                id: id
            }
        });
        return this.responseDto(data);
    }

    async create(dto: CreateVoterInfluenceSubDto) {
        const model = this.datasource.manager.create(VoterInfluenceSubEntity, dto);
        const data = await this.datasource.manager.save(VoterInfluenceSubEntity, model);
        return this.responseDto(data);
    }

    async update(id: string, dto: UpdateVoterInfluenceSubDto) {
        return this.datasource.manager.update(VoterInfluenceSubEntity, id, { ...dto });
    }

    async delete(id: string) {
        const data = await this.getById(id);
        if (data) {
            return this.datasource.manager.remove(VoterInfluenceSubEntity, data);
        }
    }

    private responseDto(entity: VoterInfluenceSubEntity): ResponseVoterInfluenceSubDto {
        return Object.assign(new ResponseVoterInfluenceSubDto(), (({
            id, code, description, remarks, status, voter_influence
        }) => ({
            id, code, description, remarks, status, voter_influence
        }))(entity));
    }

    private responseDtoArray(entity: VoterInfluenceSubEntity[]): ResponseVoterInfluenceSubDto[] {
        const rDto: ResponseVoterInfluenceSubDto[] = [];
        entity.forEach(e => {
            rDto.push(Object.assign(new ResponseVoterInfluenceSubDto(), (({
                id, code, description, remarks, status, voter_influence
            }) => ({
                id, code, description, remarks, status, voter_influence: (({ id }) => ({ id }))(voter_influence)
            }))(e)));
        });
        return rDto;
    }

}