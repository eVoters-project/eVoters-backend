import { Injectable } from "@nestjs/common";
import { CreateVoterPositionDto, ResponseVoterPositionDto, UpdateVoterPositionDto } from "src/dto";
import { VoterPositionEntity } from "src/entity";
import { DataSource } from "typeorm";

@Injectable()
export class VoterPositionService {

    constructor(private readonly datasource: DataSource) { }

    async getAll() {
        const data = await this.datasource.manager.find(VoterPositionEntity);
        return this.responseDtoArray(data);
    }

    async getById(id: string) {
        const data = await this.datasource.manager.findOne(VoterPositionEntity, {
            where: {
                id: id
            }
        });
        return this.responseDto(data);
    }

    async create(dto: CreateVoterPositionDto) {
        const model = this.datasource.manager.create(VoterPositionEntity, dto);
        const data = await this.datasource.manager.save(VoterPositionEntity, model);
        return this.responseDto(data);
    }

    async update(id: string, dto: UpdateVoterPositionDto) {
        return await this.datasource.manager.update(VoterPositionEntity, id, { ...dto });
    }

    async delete(id: string) {
        const data = await this.getById(id);
        if (data) {
            return await this.datasource.manager.remove(VoterPositionEntity, data);
        }
    }

    private responseDto(entity: VoterPositionEntity): ResponseVoterPositionDto {
        return Object.assign(new ResponseVoterPositionDto(), (({
            id, code, description
        }) => ({
            id, code, description
        }))(entity));
    }

    private responseDtoArray(entity: VoterPositionEntity[]): ResponseVoterPositionDto[] {
        const rDto: ResponseVoterPositionDto[] = [];
        entity.forEach(e => {
            rDto.push(Object.assign(new ResponseVoterPositionDto(), (({
                id, code, description
            }) => ({
                id, code, description
            }))(e)))
        });
        return rDto;
    }
}