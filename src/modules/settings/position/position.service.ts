import { Injectable, NotFoundException } from "@nestjs/common";
import { CreatePositionDto, ResponsePositionDto, UpdatePositionDto } from "src/dto";
import { PositionEntity } from "src/entity/position/position.entity";
import { DataSource } from "typeorm";

@Injectable()
export class PositionService {

    constructor(private readonly datasource: DataSource) { }

    async getAll() {
        const data = await this.datasource.manager.find(PositionEntity, {
            order: {
                code: 'ASC',
                sequence: 'ASC'
            }
        });
        return this.responseDtoArray(data);
    }

    async getByQuery(query: any) {
        const { level, election_cycle } = query;
        const data = await this.datasource.manager.find(PositionEntity, {
            where: {
                level: level,
                election_cycle: election_cycle
            },
            order: {
                sequence: 'ASC'
            }
        });
        return this.responseDtoArray(data);
    }

    async getById(id: string) {
        const data = await this.datasource.manager.findOne(PositionEntity, {
            where: {
                id: id
            }
        });
        return this.responseDto(data);
    }

    async create(dto: CreatePositionDto) {
        const model = this.datasource.manager.create(PositionEntity, dto);
        const data = await this.datasource.manager.save(PositionEntity, model);
        return this.responseDto(data);
    }

    async update(id: string, dto: UpdatePositionDto) {
        return this.datasource.manager.update(PositionEntity, id, { ...dto });
    }

    async delete(id: string) {
        const data = await this.datasource.manager.findOne(PositionEntity, {
            where: {
                id: id
            }
        });
        if (data) {
            return await this.datasource.manager.remove(PositionEntity, data);
        }
        return NotFoundException;
    }

    private responseDto(entity: PositionEntity): ResponsePositionDto {
        return Object.assign(new ResponsePositionDto(), (({
            created_at, updated_at, ...position
        }) => ({
            ...position
        }))(entity));
    }

    private responseDtoArray(entity: PositionEntity[]): ResponsePositionDto[] {
        const rDto: ResponsePositionDto[] = [];
        entity.forEach(e => {
            rDto.push(Object.assign(new ResponsePositionDto(), (({
                created_at, updated_at, ...position
            }) => ({
                ...position
            }))(e)))
        });
        return rDto;
    }

}