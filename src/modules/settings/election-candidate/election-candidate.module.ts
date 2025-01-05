import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ElectionCandidateEntity } from "src/entity";
import { ElectionCandidateController } from "./election-candidate.controller";
import { ElectionCandidateService } from "./election-candidate.service";

@Module({
    imports: [TypeOrmModule.forFeature([ElectionCandidateEntity])],
    controllers: [ElectionCandidateController],
    providers: [ElectionCandidateService]
})
export class ElectionCandidateModule { }