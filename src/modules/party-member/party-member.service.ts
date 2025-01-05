import { Injectable, NotFoundException } from "@nestjs/common";
import { CreatePartyMemberDto, ResponsePartyMemberDto, UpdatePartyMemberDto } from "src/dto";
import { PartyMemberEntity } from "src/entity/party-member/party-member.entity";
import { DataSource } from "typeorm";

@Injectable()
export class PartyMemberService {

    constructor(private datasource: DataSource) { }

    async getAll() {
        const data = await this.datasource.manager.find(PartyMemberEntity, {
            relations: {
                party: {
                    leader: {
                        voter: true
                    }
                },
                voter: true
            }
        });
        return this.responseDtoArray(data);
    }

    async getById(id: string) {
        const data = await this.datasource.manager.findOne(PartyMemberEntity, {
            relations: {
                party: {
                    leader: {
                        voter: true
                    }
                },
                voter: true
            },
            where: {
                id: id
            }
        });
        return this.responseDto(data);
    }

    async getByParty(id: string) {
        const data = await this.datasource.manager.find(PartyMemberEntity, {
            relations: {
                party: {
                    leader: {
                        voter: true
                    }
                },
                voter: true
            },
            where: {
                party: {
                    id: id
                }
            }
        });

        return this.responseDtoArray(data);
    }

    async create(dto: CreatePartyMemberDto) {
        const model = this.datasource.manager.create(PartyMemberEntity, dto);
        const data = await this.datasource.manager.save(PartyMemberEntity, model);
        return data;
    }

    async update(id: string, dto: UpdatePartyMemberDto) {
        return this.datasource.manager.update(PartyMemberEntity, id, { ...dto });
    }

    async delete(id: string) {
        var data = await this.datasource.manager.findOne(PartyMemberEntity, {
            where: {
                id: id
            }
        });

        if (data) {
            return this.datasource.manager.remove(PartyMemberEntity, data);
        }
        return new NotFoundException();
    }

    private responseDto(entity: PartyMemberEntity): ResponsePartyMemberDto {
        return Object.assign(new ResponsePartyMemberDto(), (({
            created_at, updated_at, party, voter, ...data
        }) => ({
            ...data,
            leader: (({ voter }) => `${voter.firstname} ${voter.middlename} ${voter.lastname}`)(party.leader),
            member: (({ voter }) => `${voter.firstname} ${voter.middlename} ${voter.lastname}`)({ voter })
        }))(entity));
    }

    private responseDtoArray(entity: PartyMemberEntity[]): ResponsePartyMemberDto[] {
        const rDto: ResponsePartyMemberDto[] = [];
        entity.forEach(e => {
            rDto.push(Object.assign(new ResponsePartyMemberDto(), (({
                created_at, updated_at, party, voter, ...data
            }) => ({
                ...data,
                leader: (({ voter }) => `${voter.firstname} ${voter.middlename} ${voter.lastname}`)(party.leader),
                member: (({ voter }) => `${voter.firstname} ${voter.middlename} ${voter.lastname}`)({ voter })
            }))(e)))
        });
        return rDto;
    }
}