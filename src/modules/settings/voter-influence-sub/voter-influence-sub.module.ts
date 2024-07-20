import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VoterInfluenceSubController } from "./voter-influence-sub.controller";
import { VoterInfluenceSubService } from "./voter-influence-sub.service";
import { VoterInfluenceSubEntity } from "src/entity/voter-influence-sub/voter-influence-sub.entity";

@Module({
    imports: [TypeOrmModule.forFeature([VoterInfluenceSubEntity])],
    controllers: [VoterInfluenceSubController],
    providers: [VoterInfluenceSubService]
})
export class VoterInfluenceSubModule { }