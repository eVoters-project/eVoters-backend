import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ElectionPositionEntity } from "src/entity";
import { ElectionPositionController } from "./election-position.controller";
import { ElectionPositionService } from "./election-position.service";

@Module({
    imports: [TypeOrmModule.forFeature([ElectionPositionEntity])],
    controllers: [ElectionPositionController],
    providers: [ElectionPositionService]
})
export class ElectionPositionModule { }