import { Module } from "@nestjs/common";
import { VoterPositionController } from "./voter-position.controller";
import { VoterPositionService } from "./voter-position.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VoterPositionEntity } from "src/entity";

@Module({
    imports: [TypeOrmModule.forFeature([VoterPositionEntity])],
    controllers: [VoterPositionController],
    providers: [VoterPositionService]
})
export class VoterPositionModule { }