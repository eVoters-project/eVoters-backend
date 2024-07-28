import { HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateLeaderDto, ResponseLeaderDto, UpdateLeaderDto } from "src/dto";
import { LeaderEntity } from "src/entity";
import { DataSource } from "typeorm";

@Injectable()
export class LeaderService {

    constructor(private datasource: DataSource) { }

    async getAll() {
        const data = await this.datasource.manager.find(LeaderEntity, {
            relations: {
                voter: true,
                voter_leader: true
            }
        });
        return this.responseDtoArray(data);
    }

    async getById(id: string) {
        const data = await this.datasource.manager.findOne(LeaderEntity, {
            relations: {
                voter: true,
                voter_leader: true
            },
            where: {
                id: id
            }
        });
        return this.responseDto(data);
    }

    async create(dto: CreateLeaderDto) {
        const model = this.datasource.manager.create(LeaderEntity, dto);
        return await this.datasource.manager.save(LeaderEntity, model);
    }

    async update(id: string, dto: UpdateLeaderDto) {
        return await this.datasource.manager.update(LeaderEntity, id, { ...dto });
    }

    async delete(id: string) {
        const data = await this.datasource.manager.findOne(LeaderEntity, {
            relations: {
                voter: true,
                voter_leader: true
            },
            where: {
                id: id
            }
        });

        if (data) {
            return this.datasource.manager.remove(LeaderEntity, data);
        }
        return new NotFoundException();
    }

    private responseDto(entity: LeaderEntity): ResponseLeaderDto {
        return Object.assign(new ResponseLeaderDto(), (({
            created_at, updated_at, voter, voter_leader, ...leader
        }) => ({
            ...leader,
            voter: (({ id, firstname, middlename, lastname }) => `${firstname} ${middlename} ${lastname}`)(voter),
            voter_leader: (({ description }) => description)(voter_leader),
        }))(entity));
    }

    private responseDtoArray(entity: LeaderEntity[]): ResponseLeaderDto[] {
        const rDto: ResponseLeaderDto[] = [];
        entity.forEach(e => {
            rDto.push(Object.assign(new ResponseLeaderDto(), (({
                created_at, updated_at, voter, voter_leader, ...leader
            }) => ({
                ...leader,
                voter: (({ firstname, middlename, lastname }) => `${firstname} ${middlename} ${lastname}`)(voter),
                voter_leader: (({ description }) => description)(voter_leader),
            }))(e)))
        });
        return rDto;
    }
}