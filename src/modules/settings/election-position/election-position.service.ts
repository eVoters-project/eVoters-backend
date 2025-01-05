import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateElectionPositionDto, ResponseElectionPositionDto, ResponseElectionScheduleDto, UpdateElectionPositionDto } from "src/dto";
import { ElectionPositionEntity } from "src/entity";
import { DataSource } from "typeorm";

@Injectable()
export class ElectionPositionService {

    constructor(private readonly datasource: DataSource) { }

    async getAll() {
        const data = await this.datasource.manager.find(ElectionPositionEntity, {
            relations: {
                position: true
            }
        });
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

    async getBySchedule(id: string) {
        const data = await this.datasource.manager.find(ElectionPositionEntity, {
            relations: {
                position: true
            },
            where: {
                election_schedule: {
                    id: id
                }
            }
        });
        return this.responseDtoArray(data);
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
        return Object.assign(new ResponseElectionPositionDto(), (({
            id,
            seat,
            position,
            remarks
        }) => ({
            id,
            seat,
            name: position?.name ?? '',
            remarks
        }))(entity));
    }

    private responseDtoArray(entity: ElectionPositionEntity[]): ResponseElectionPositionDto[] {
        const rDto: ResponseElectionPositionDto[] = [];
        entity.forEach(e => {
            rDto.push(Object.assign(new ResponseElectionPositionDto(), (({
                id,
                seat,
                position,
                remarks
            }) => ({
                id,
                seat,
                name: position?.name ?? '',
                remarks
            }))(e)))
        });
        return rDto;
    }

}