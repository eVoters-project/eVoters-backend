import { Injectable, NotFoundException } from "@nestjs/common";
import { PartyEntity } from "src/entity";
import { DataSource } from "typeorm";

@Injectable()
export class PartyService {

    constructor(private datasource: DataSource) { }

    async getAll() {
        return await this.datasource.manager.find(PartyEntity);
    }

    async getById(id: string) {
        return await this.datasource.manager.findOne(PartyEntity, {
            where: {
                id: id
            }
        })
    }

    create() {

    }

    update() {

    }

    async delete(id: string) {
        var party = await this.getById(id);

        if (party) {
            return this.datasource.manager.remove(PartyEntity, party);
        }
        return new NotFoundException();
    }
}