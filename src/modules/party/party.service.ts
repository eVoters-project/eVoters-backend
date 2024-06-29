import { Injectable } from "@nestjs/common";
import { PartyEntity } from "src/entity";
import { DataSource } from "typeorm";

@Injectable()
export class PartyService {

    constructor(private datasource: DataSource) {}

    getParties() {
        return this.datasource.manager.find(PartyEntity);
    }

    getPartyById(id: string) {
        return this.datasource.manager.findOne(PartyEntity, {
            where: {
                id: id
            }
        })
    }

    async deleteParty(id: string) {
        var party = await this.getPartyById(id);
        
        if (party) {
            return this.datasource.manager.remove(PartyEntity, party);
        }
    }
}