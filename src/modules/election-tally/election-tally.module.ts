import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ElectionTallyEntity } from "src/entity/election-tally/election-tally.entity";
import { ElectionTallyController } from "./election-tally.controller";
import { ElectionTallyService } from "./election-tally.service";

@Module({
    imports: [TypeOrmModule.forFeature([ElectionTallyEntity])],
    controllers: [ElectionTallyController],
    providers: [ElectionTallyService]
})
export class ElectionTallyModule { }