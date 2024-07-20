import { Injectable } from "@nestjs/common";
import { CreateVoterInfluenceDto, ResponseVoterInfluenceDto, UpdateVoterInfluenceDto } from "src/dto";
import { VoterInfluenceEntity } from "src/entity";
import { DataSource } from "typeorm";

@Injectable()
export class VoterInfluenceService {

    constructor(private readonly datasource: DataSource) { }

    async getAll() {
        const data = await this.datasource.manager.find(VoterInfluenceEntity);
        return this.ResponseDtoArray(data);
    }

    async getById(id: string) {
        const data = await this.datasource.manager.findOne(VoterInfluenceEntity, {
            where: {
                id: id
            }
        });
        return this.ResponseDto(data);
    }

    async create(dto: CreateVoterInfluenceDto) {
        const model = this.datasource.manager.create(VoterInfluenceEntity, dto);
        const data = await this.datasource.manager.save(VoterInfluenceEntity, model);

        return this.ResponseDto(data);
    }

    async update(id: string, dto: UpdateVoterInfluenceDto) {
        return await this.datasource.manager.update(VoterInfluenceEntity, id, { ...dto });
    }

    async delete(id: string) {
        const data = await this.getById(id);
        if (data) {
            return await this.datasource.manager.remove(VoterInfluenceEntity, data);
        }
    }

    private ResponseDto(entity: VoterInfluenceEntity): ResponseVoterInfluenceDto {
        const { id, code, description, remarks, status } = entity;
        const rDto: ResponseVoterInfluenceDto = { id, code, description, remarks, status };
        return rDto;
    }

    private ResponseDtoArray(entity: VoterInfluenceEntity[]): ResponseVoterInfluenceDto[] {
        const rDto: ResponseVoterInfluenceDto[] = [];
        entity.forEach(e => {
            const { id, code, description, remarks, status } = e;
            rDto.push({ id, code, description, remarks, status })
        });
        return rDto;
    }
}