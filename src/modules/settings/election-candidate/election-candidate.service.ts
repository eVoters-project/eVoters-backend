import { Injectable, NotFoundException } from "@nestjs/common";
import { validate } from "class-validator";
import { format } from "date-fns";
import { CreateElectionCandidateDto, ResponseElectionCandidateDto, UpdateElectionCandidateDto } from "src/dto";
import { ElectionCandidateEntity, VoterEntity } from "src/entity";
import { VoterInterface } from "src/interface";
import { DataSource } from "typeorm";

@Injectable()
export class ElectionCandidateService {

    constructor(private readonly datasource: DataSource) { }

    async getAll() {
        const data = await this.datasource.manager.find(ElectionCandidateEntity, {
            relations: {
                position: {
                    election_schedule: true,
                    position: true
                },
                party_member: {
                    voter: true
                },
                voter: true
            }
        });
        return this.responseDtoArray(data);
    }

    async getById(id: string) {
        const data = await this.datasource.manager.findOne(ElectionCandidateEntity, {
            relations: {
                position: {
                    election_schedule: true,
                    position: true
                },
                party_member: {
                    voter: true
                },
                voter: true
            },
            where: {
                id: id
            }
        });
        return this.responseDto(data);
    }

    async getBySchedule(id: string) {
        const data = await this.datasource.manager.find(ElectionCandidateEntity, {
            relations: {
                position: {
                    election_schedule: true,
                    position: true
                },
                party_member: {
                    voter: true
                },
                voter: true
            },
            where: {
                position: {
                    election_schedule: {
                        id: id
                    }
                }
            }
        });

        return this.responseDtoArray(data);
    }

    async getByPosition(id: string) {
        const data = await this.datasource.manager.find(ElectionCandidateEntity, {
            relations: {
                position: {
                    election_schedule: true,
                    position: true
                },
                party_member: {
                    voter: true
                },
                voter: true
            },
            where: {
                position: {
                    id: id
                }
            }
        });

        return this.responseDtoArray(data);
    }

    async create(dto: CreateElectionCandidateDto) {
        const model = this.datasource.manager.create(ElectionCandidateEntity, dto);
        const data = await this.datasource.manager.save(ElectionCandidateEntity, model);
        return data;
    }

    async update(id: string, dto: UpdateElectionCandidateDto) {
        return this.datasource.manager.update(ElectionCandidateEntity, id, { ...dto });
    }

    async updateElectivePositions() {

    }

    async delete(id: string) {
        const data = await this.datasource.manager.findOne(ElectionCandidateEntity, {
            where: {
                id: id
            }
        });

        if (data) {
            return this.datasource.manager.remove(ElectionCandidateEntity, data);
        }

        return new NotFoundException();
    }

    private responseDto(entity: ElectionCandidateEntity): ResponseElectionCandidateDto {
        return Object.assign(new ResponseElectionCandidateDto(), (({
            id, position, party_member, voter, remarks, status
        }) => ({
            id,
            schedule: `${format(position.election_schedule.date, 'yyyy')} ${position.election_schedule.type}`,
            position: position?.position?.name,
            name: party_member != null
                ? this.ParseCandidateName(party_member.voter)
                : this.ParseCandidateName(voter),
            type: party_member != null ? 'Party' : 'Independent',
            remarks,
            status
        }))(entity));
    }

    private responseDtoArray(entity: ElectionCandidateEntity[]): ResponseElectionCandidateDto[] {
        const rDto: ResponseElectionCandidateDto[] = [];
        entity.forEach(e => {
            rDto.push(Object.assign(new ResponseElectionCandidateDto(), (({
                id, position, party_member, voter, remarks, status
            }) => ({
                id,
                schedule: `${format(position.election_schedule.date, 'yyyy')} ${position.election_schedule.type}`,
                position: position.position.name,
                name: party_member != null
                    ? this.ParseCandidateName(party_member.voter)
                    : this.ParseCandidateName(voter),
                type: party_member != null ? 'Party' : 'Independent',
                remarks,
                status
            }))(e)))
        });
        return rDto;
    }

    private ParseCandidateName(voter: VoterInterface): string {

        if (voter == null)
            return '';

        if (voter?.firstname && voter?.middlename && voter?.lastname) {
            return `${voter.firstname} ${voter.middlename} ${voter.lastname}`;
        }

        if (voter?.firstname && !voter?.middlename && voter?.lastname) {
            return `${voter.firstname} ${voter.lastname}`
        }
    }

}