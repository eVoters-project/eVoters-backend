import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ElectionScheduleEntity } from "src/entity/election-schedule/election-schedule.entity";
import { ElectionScheduleController } from "./election-schedule.controller";
import { ElectionScheduleService } from "./election-schedule.service";
import { ElectionPositionEntity } from "src/entity";

@Module({
    imports: [TypeOrmModule.forFeature([ElectionScheduleEntity, ElectionPositionEntity])],
    controllers: [ElectionScheduleController],
    providers: [ElectionScheduleService]
})
export class ElectionScheduleModule { }