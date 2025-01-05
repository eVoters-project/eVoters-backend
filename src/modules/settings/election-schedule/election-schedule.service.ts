import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { CreateElectionScheduleDto } from "src/dto/election-schedule/create-election-schedule.dto";
import { ResponseElectionScheduleDto } from "src/dto/election-schedule/response-election-schedule.dto";
import { UpdateElectionScheduleDto } from "src/dto/election-schedule/update-election-schedule.dto";
import { ElectionPositionEntity } from "src/entity";
import { ElectionScheduleEntity } from "src/entity/election-schedule/election-schedule.entity";
import { DataSource } from "typeorm";

@Injectable()
export class ElectionScheduleService {

    constructor(private readonly datasource: DataSource) { }

    async getAll() {
        const data = await this.datasource.manager.find(ElectionScheduleEntity, {
            order: {
                date: 'ASC'
            }
        });
        return this.responseDtoArray(data);
    }

    async getById(id: string) {
        const data = await this.datasource.manager.findOne(ElectionScheduleEntity, {
            relations: {
                elective_positions: {
                    position: true
                }
            },
            where: {
                id: id
            }
        });
        return this.responseDto(data);
    }

    async create(dto: CreateElectionScheduleDto) {
        const { elective_positions: detail, ...master } = dto;

        if (detail && detail.length) {
            const runner = this.datasource.createQueryRunner();

            try {
                await runner.connect();
                await runner.startTransaction();

                const model = this.datasource.manager.create(ElectionScheduleEntity, master);
                const master_key = await runner.manager.save(ElectionScheduleEntity, model);

                await Promise.all(detail.map(async dtl => {
                    const model = runner.manager.create(ElectionPositionEntity, dtl);
                    model.election_schedule = master_key;
                    await runner.manager.save(ElectionPositionEntity, model);
                }));

                await runner.commitTransaction();
            } catch (err) {
                await runner.rollbackTransaction();
                throw new HttpException({
                    code: err.code,
                    error_no: err.errno,
                    message: err.sqlMessage
                }, HttpStatus.INTERNAL_SERVER_ERROR);
            } finally {
                await runner.release();
            }
        }

        const model = this.datasource.manager.create(ElectionScheduleEntity, master);
        const data = await this.datasource.manager.save(ElectionScheduleEntity, model);
        return this.responseDto(data);
    }

    async update(id: string, dto: UpdateElectionScheduleDto) {
        return this.datasource.manager.update(ElectionScheduleEntity, id, { ...dto });
    }

    async updateElectivePositions() {

    }

    async delete(id: string) {
        const data = await this.datasource.manager.findOne(ElectionScheduleEntity, {
            where: {
                id: id
            }
        });

        if (data) {
            return this.datasource.manager.remove(ElectionScheduleEntity, data);
        }

        return new NotFoundException();
    }

    private responseDto(entity: ElectionScheduleEntity): ResponseElectionScheduleDto {
        return Object.assign(new ResponseElectionScheduleDto(), (({
            created_at, updated_at, ...election
        }) => ({
            id: election.id,
            date: election.date,
            type: election.type,
            remarks: election.remarks
            // elective_positions: elective_positions?.sort((a, b) => a.sequence - b.sequence).map(ep => ({
            //     id: ep.id,
            //     sequence: ep.sequence,
            //     seat: ep.seat,
            //     position: ep.position.name,
            //     remarks: ep.remarks
            // }))
        }))(entity));
    }

    private responseDtoArray(entity: ElectionScheduleEntity[]): ResponseElectionScheduleDto[] {
        const rDto: ResponseElectionScheduleDto[] = [];
        entity.forEach(e => {
            rDto.push(Object.assign(new ResponseElectionScheduleDto(), (({
                created_at, updated_at, elective_positions, ...election
            }) => ({
                id: election.id,
                date: election.date,
                type: election.type,
                remarks: election.remarks
                // ...election,
                // elective_positions: elective_positions?.sort((a, b) => a.sequence - b.sequence)?.map(ep => ({
                //     id: ep.id,
                //     sequence: ep.sequence,
                //     seat: ep.seat,
                //     position: ep.position.name,
                //     remarks: ep.remarks
                // }))
            }))(e)))
        });
        return rDto;
    }
}