import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ElectionScheduleEntity } from "src/entity/election-schedule/election-schedule.entity";
import { ElectionScheduleController } from "./election-schedule.controller";
import { ElectionScheduleService } from "./election-schedule.service";
import { ElectionSchedulePositionEntity } from "src/entity/election-schedule-position/election-schedule-position.entity";

@Module({
    imports: [TypeOrmModule.forFeature([ElectionScheduleEntity, ElectionSchedulePositionEntity])],
    controllers: [ElectionScheduleController],
    providers: [ElectionScheduleService]
})
export class ElectionScheduleModule { }