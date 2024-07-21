import { Injectable } from "@nestjs/common";
import { CreateVoterStatusDto, ResponseVoterStatusDto, UpdateVoterPositionDto } from "src/dto";
import { VoterStatusEntity } from "src/entity";
import { DataSource } from "typeorm";

@Injectable()
export class VoterStatusService {

    constructor(private readonly datasource: DataSource) { }

    async getAll() {
        const data = await this.datasource.manager.find(VoterStatusEntity);
        return this.responseDtoArray(data);
    }

    async getById(id: string) {
        const data = await this.datasource.manager.findOne(VoterStatusEntity, {
            where: {
                id: id
            }
        });
        return this.responseDto(data);
    }

    async create(dto: CreateVoterStatusDto) {
        const model = this.datasource.manager.create(VoterStatusEntity, dto);
        const data = await this.datasource.manager.save(VoterStatusEntity, model);
        return this.responseDto(data);
    }

    async update(id: string, dto: UpdateVoterPositionDto) {
        return await this.datasource.manager.update(VoterStatusEntity, id, { ...dto });
    }

    async delete(id: string) {
        const data = await this.getById(id);
        if (data) {
            return this.datasource.manager.remove(VoterStatusEntity, data);
        }
    }

    private responseDto(entity: VoterStatusEntity): ResponseVoterStatusDto {
        return Object.assign(new ResponseVoterStatusDto(), (({
            id, code, description
        }) => ({
            id, code, description
        }))(entity));
    }

    private responseDtoArray(entity: VoterStatusEntity[]): ResponseVoterStatusDto[] {
        const rDto: ResponseVoterStatusDto[] = [];
        entity.forEach(e => {
            rDto.push(Object.assign(new ResponseVoterStatusDto(), (({
                id, code, description
            }) => ({
                id, code, description
            }))(e)))
        });
        return rDto;
    }
}