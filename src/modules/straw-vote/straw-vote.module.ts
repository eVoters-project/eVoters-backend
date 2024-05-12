import { Module } from "@nestjs/common";
import { StrawVoteController } from "./straw-vote.controller";
import { StrawVoteService } from "./straw-vote.service";

@Module({
    imports: [],
    controllers: [StrawVoteController],
    providers: [StrawVoteService]
})
export class StrawVoteModule {}