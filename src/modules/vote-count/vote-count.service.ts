import { Injectable } from "@nestjs/common";
import { VoteCountEntity } from "src/entity/vote-count/vote-count.entity";
import { DataSource } from "typeorm";

@Injectable()
export class VoteCountService {

    constructor(private datasource: DataSource) {}

    getVoteCounts() {
        return this.datasource.manager.find(VoteCountEntity);
    }

    getVoteCountById(id: string) {
        return this.datasource.manager.findOne(VoteCountEntity, {
            where: {
                id: id
            }
        })
    }

    async deleteVoteCount(id: string) {
        var votecount = await this.getVoteCountById(id);
        
        if (votecount) {
            return this.datasource.manager.remove(VoteCountEntity, votecount);
        }
    }
}