import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateElectionPositionDto, ResponseElectionPositionDto, ResponseElectionScheduleDto, UpdateElectionPositionDto } from "src/dto";
import { ElectionPositionEntity } from "src/entity";
import { DataSource } from "typeorm";

@Injectable()
export class ElectionPositionService {

    constructor(private readonly datasource: DataSource) { }

    async getAll() {
        const data = await this.datasource.manager.find(ElectionPositionEntity);
        return this.responseDtoArray(data);
    }

    async getById(id: string) {
        const data = await this.datasource.manager.findOne(ElectionPositionEntity, {
            where: {
                id: id
            }
        });
        return this.responseDto(data);
    }

    async create(dto: CreateElectionPositionDto) {
        const model = this.datasource.manager.create(ElectionPositionEntity, dto);
        const data = await this.datasource.manager.save(ElectionPositionEntity, model);
        return this.responseDto(data);
    }

    async update(id: string, dto: UpdateElectionPositionDto) {
        return this.datasource.manager.update(ElectionPositionEntity, id, { ...dto });
    }

    async updateElectivePositions() {

    }

    async delete(id: string) {
        const data = await this.datasource.manager.findOne(ElectionPositionEntity, {
            where: {
                id: id
            }
        });

        if (data) {
            return this.datasource.manager.remove(ElectionPositionEntity, data);
        }

        return new NotFoundException();
    }

    private responseDto(entity: ElectionPositionEntity): ResponseElectionPositionDto {
        return Object.assign(new ResponseElectionScheduleDto(), (({
            id, code, name, description, status
        }) => ({
            id, code, name, description, status
        }))(entity));
    }

    private responseDtoArray(entity: ElectionPositionEntity[]): ResponseElectionScheduleDto[] {
        const rDto: ResponseElectionScheduleDto[] = [];
        entity.forEach(e => {
            rDto.push(Object.assign(new ResponseElectionScheduleDto(), (({
                id, code, name, description, status
            }) => ({
                id, code, name, description, status
            }))(e)))
        });
        return rDto;
    }
}