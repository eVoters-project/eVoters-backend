import { Injectable } from "@nestjs/common";
import { LeaderEntity } from "src/entity";
import { DataSource } from "typeorm";

@Injectable()
export class LeaderService {

    constructor(private datasource: DataSource) {}

    getLeaders() {
        return this.datasource.manager.find(LeaderEntity);
    }

    getLeaderById(id: string) {
        return this.datasource.manager.findOne(LeaderEntity, {
            where: {
                id: id
            }
        })
    }

    async deleteLeader(id: string) {
        var leader = await this.getLeaderById(id);
        
        if (leader) {
            return this.datasource.manager.remove(LeaderEntity, leader);
        }
    }
}