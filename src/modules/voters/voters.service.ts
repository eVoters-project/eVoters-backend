import { Injectable } from "@nestjs/common";
import { CreateVoterDto } from "src/dto";
import { VoterEntity } from "src/entity";
import { DataSource } from "typeorm";

@Injectable()
export class VotersService {

    constructor(private datasource: DataSource) {}

    getVoters() {
        return this.datasource.manager.find(VoterEntity);
    }

    getVoterById(id: string): Promise<VoterEntity> {
        return this.datasource.manager.findOne(VoterEntity, {
            where: {
                id: id
            }
        });
    }

    createVoter(dto: CreateVoterDto) {
        var model = this.datasource.manager.create(VoterEntity, dto);
        return this.datasource.manager.save(VoterEntity, model);
    }

    async deleteVoter(id: string) {
        var voter = await this.getVoterById(id);

        if (voter) {
            return this.datasource.manager.remove(VoterEntity, voter);
        }
    }

}