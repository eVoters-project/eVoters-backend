import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VoterInfluenceEntity } from "src/entity";
import { VoterInfluenceController } from "./voter-influence.controller";
import { VoterInfluenceService } from "./voter-influence.service";

@Module({
    imports: [TypeOrmModule.forFeature([VoterInfluenceEntity])],
    controllers: [VoterInfluenceController],
    providers: [VoterInfluenceService]
})
export class VoterInfluenceModule { }