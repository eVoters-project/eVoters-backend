import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VoterLeaderEntity } from "src/entity/voter-leader/voter-leader.entity";
import { VoterLeaderController } from "./voter-leader.controller";
import { VoterLeaderService } from "./voter-leader.service";

@Module({
    imports: [TypeOrmModule.forFeature([VoterLeaderEntity])],
    controllers: [VoterLeaderController],
    providers: [VoterLeaderService]
})
export class VoterLeaderModule { }