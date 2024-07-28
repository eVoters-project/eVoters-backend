import { Injectable, NotFoundException } from "@nestjs/common";
import { CreatePartyDto, ResponsePartyDto, UpdatePartyDto } from "src/dto";
import { PartyEntity } from "src/entity";
import { DataSource } from "typeorm";

@Injectable()
export class PartyService {

    constructor(private datasource: DataSource) { }

    async getAll() {
        const data = await this.datasource.manager.find(PartyEntity, {
            relations: {
                leader: {
                    voter: true
                }
            }
        });
        return this.responseDtoArray(data);
    }

    async getById(id: string) {
        const data = await this.datasource.manager.findOne(PartyEntity, {
            relations: {
                leader: {
                    voter: true
                }
            },
            where: {
                id: id
            }
        });
        return this.responseDto(data);
    }

    async create(dto: CreatePartyDto) {
        const model = this.datasource.manager.create(PartyEntity, dto);
        const data = await this.datasource.manager.save(PartyEntity, model);
        return data;
    }

    async update(id: string, dto: UpdatePartyDto) {
        return this.datasource.manager.update(PartyEntity, id, { ...dto });
    }

    async delete(id: string) {
        var data = await this.datasource.manager.findOne(PartyEntity, {
            where: {
                id: id
            }
        });

        if (data) {
            return this.datasource.manager.remove(PartyEntity, data);
        }
        return new NotFoundException();
    }

    private responseDto(entity: PartyEntity): ResponsePartyDto {
        return Object.assign(new ResponsePartyDto(), (({
            created_at, updated_at, leader, ...party
        }) => ({
            ...party,
            leader: (({ voter }) => `${voter.firstname} ${voter.middlename} ${voter.lastname}`)(leader),
        }))(entity));
    }

    private responseDtoArray(entity: PartyEntity[]): ResponsePartyDto[] {
        const rDto: ResponsePartyDto[] = [];
        entity.forEach(e => {
            rDto.push(Object.assign(new ResponsePartyDto(), (({
                created_at, updated_at, leader, ...party
            }) => ({
                ...party,
                leader: (({ voter }) => `${voter.firstname} ${voter.middlename} ${voter.lastname}`)(leader),
            }))(e)))
        });
        return rDto;
    }
}