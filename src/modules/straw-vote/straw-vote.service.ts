import { Injectable } from "@nestjs/common";
import { StrawVoteEntity } from "src/entity";
import { DataSource } from "typeorm";

@Injectable()
export class StrawVoteService {

    constructor(private datasource: DataSource) {}

    getStrawVotes() {
        return this.datasource.manager.find(StrawVoteEntity);
    }

    getStrawVoteById(id: string) {
        return this.datasource.manager.findOne(StrawVoteEntity, {
            where: {
                id: id
            }
        })
    }

    async deleteStrawVote(id: string) {
        var strawvote = await this.getStrawVoteById(id);
        
        if (strawvote) {
            return this.datasource.manager.remove(StrawVoteEntity, strawvote);
        }
    }
}