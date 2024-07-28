import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AreaLGUEntity } from "src/entity";
import { AreaLGUController } from "./area-lgu.controller";
import { AreaLGUService } from "./area-lgu.service";

@Module({
    imports: [TypeOrmModule.forFeature([AreaLGUEntity])],
    controllers: [AreaLGUController],
    providers: [AreaLGUService]
})
export class AreaLGUModule { }