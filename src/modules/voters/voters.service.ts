import { Injectable } from "@nestjs/common";
import { CreateVoterDto, ResponseVoterDto, UpdateVoterDto } from "src/dto";
import { VoterEntity } from "src/entity";
import { DataSource } from "typeorm";

@Injectable()
export class VotersService {

    constructor(private datasource: DataSource) { }

    async getVoters() {
        const data = await this.datasource.manager.find(VoterEntity, {
            relations: {
                barangay: true,
                purok: true,
                vote_group: true,
                parties: {
                    party: true
                }
            }
        });
        return this.responseDtoArray(data);
    }

    async getVoterById(id: string): Promise<ResponseVoterDto> {
        const data = await this.datasource.manager.findOne(VoterEntity, {
            where: {
                id: id
            }
        });
        return this.responseDto(data);
    }

    createVoter(dto: CreateVoterDto) {
        var model = this.datasource.manager.create(VoterEntity, dto);
        return this.datasource.manager.save(VoterEntity, model);
    }

    updateVoter(id: string, dto: UpdateVoterDto) {
        console.log('reach at service level');
        return this.datasource.manager.update(VoterEntity, id, dto);
    }

    async deleteVoter(id: string) {
        var voter = await this.datasource.manager.findOne(VoterEntity, {
            where: {
                id: id
            }
        });

        if (voter) {
            return this.datasource.manager.remove(VoterEntity, voter);
        }
    }

    private responseDto(entity: VoterEntity): ResponseVoterDto {
        return Object.assign(new ResponseVoterDto(), (({
            created_at, updated_at, ...rest
        }) => ({
            ...rest
        }))(entity));
    }

    private responseDtoArray(entity: VoterEntity[]): ResponseVoterDto[] {
        const rDto: ResponseVoterDto[] = [];
        entity.forEach(e => {
            rDto.push(Object.assign(new ResponseVoterDto(), (({
                created_at, updated_at, verified_voter, confirmed_leader, unassigned_voter, ...rest
            }) => ({
                id: rest.id,
                precinct_no: rest.precinct_no,
                lastname: rest.lastname,
                firstname_middlename: `${rest?.firstname} ${rest?.middlename}`,
                mobile_no: rest?.mobile_no,
                latitude: rest.latitude,
                longitude: rest.longitude,
                barangay: rest.barangay?.name,
                purok: rest.purok?.name,
                party: rest.parties.map(x => x.party.name).join(', '),
                group: rest.vote_group?.name,
                vote_status: rest.vote_status,
                verified: verified_voter,
                confirmed: confirmed_leader,
                unassigned: unassigned_voter
            }))(e)))
        });
        return rDto;
    }

}