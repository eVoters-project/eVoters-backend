import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VoterStatusEntity } from "src/entity";
import { VoterStatusController } from "./voter-status.controller";
import { VoterStatusService } from "./voter-status.service";

@Module({
    imports: [TypeOrmModule.forFeature([VoterStatusEntity])],
    controllers: [VoterStatusController],
    providers: [VoterStatusService]
})
export class VoterStatusModule { }