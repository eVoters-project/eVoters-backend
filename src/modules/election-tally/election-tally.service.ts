import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateElectionTallyDto, ResponseElectionTallyDto, UpdateElectionTallyDto } from "src/dto";
import { ElectionTallyEntity } from "src/entity/election-tally/election-tally.entity";
import { VoterInterface } from "src/interface";
import { DataSource } from "typeorm";

@Injectable()
export class ElectionTallyService {

    constructor(private readonly datasource: DataSource) { }

    async getAll() {
        const data = await this.datasource.manager.find(ElectionTallyEntity, {
            relations: {
                candidate: {
                    party_member: true,
                    voter: true
                },
                precinct: true,

            }
        });
        return this.responseDtoArray(data);
    }

    async getById(id: string) {
        const data = await this.datasource.manager.findOne(ElectionTallyEntity, {
            where: {
                id: id
            }
        });
        return this.responseDto(data);
    }

    async create(dto: CreateElectionTallyDto) {
        const model = this.datasource.manager.create(ElectionTallyEntity, dto);
        const data = await this.datasource.manager.save(ElectionTallyEntity, model);
        return this.responseDto(data);
    }

    async update(id: string, dto: UpdateElectionTallyDto) {
        return this.datasource.manager.update(ElectionTallyEntity, id, { ...dto });
    }

    async updateElectivePositions() {
        // TODO:
    }

    async delete(id: string) {
        const data = await this.datasource.manager.findOne(ElectionTallyEntity, {
            where: {
                id: id
            }
        });

        if (data) {
            return this.datasource.manager.remove(ElectionTallyEntity, data);
        }

        return new NotFoundException();
    }

    private responseDto(entity: ElectionTallyEntity): ResponseElectionTallyDto {
        return Object.assign(new ResponseElectionTallyDto(), (({
            id, candidate, precinct, count
        }) => ({
            id,
            candidate: candidate?.party_member?.voter != null
                ? this.ParseCandidateName(candidate.party_member.voter)
                : this.ParseCandidateName(candidate?.voter),
            precinct: precinct?.polling_center,
            count
        }))(entity));
    }

    private responseDtoArray(entity: ElectionTallyEntity[]): ResponseElectionTallyDto[] {
        const rDto: ResponseElectionTallyDto[] = [];
        entity.forEach(e => {
            rDto.push(Object.assign(new ResponseElectionTallyDto(), (({
                id, candidate, precinct, count
            }) => ({
                id,
                candidate: candidate?.party_member?.voter != null
                    ? this.ParseCandidateName(candidate.party_member.voter)
                    : this.ParseCandidateName(candidate?.voter),
                precinct: precinct?.polling_center,
                count
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