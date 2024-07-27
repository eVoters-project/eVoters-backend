import { Module } from "@nestjs/common";
import { VoterLeaderSubController } from "./voter-leader-sub.controller";
import { VoterLeaderSubService } from "./voter-leader-sub.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VoterLeaderSubEntity } from "src/entity/voter-leader-sub/voter-leader-sub.entity";

@Module({
    imports: [TypeOrmModule.forFeature([VoterLeaderSubEntity])],
    controllers: [VoterLeaderSubController],
    providers: [VoterLeaderSubService]
})
export class VoterLeaderSubModule { }