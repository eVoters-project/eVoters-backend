import { Injectable } from "@nestjs/common";
import { CreateVoterDto, ResponseVoterDto, UpdateVoterDto } from "src/dto";
import { VoterEntity } from "src/entity";
import { DataSource } from "typeorm";

@Injectable()
export class VotersService {

    constructor(private datasource: DataSource) { }

    async getVoters() {
        const data = await this.datasource.manager.find(VoterEntity);
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
        var voter = await this.getVoterById(id);

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
                created_at, updated_at, ...rest
            }) => ({
                ...rest
            }))(e)))
        });
        return rDto;
    }

}