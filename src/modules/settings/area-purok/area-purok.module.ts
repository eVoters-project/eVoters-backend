import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AreaPurokEntity } from "src/entity/area-purok/area-purok.entity";
import { AreaPurokController } from "./area-purok.controller";
import { AreaPurokService } from "./area-purok.service";

@Module({
    imports: [TypeOrmModule.forFeature([AreaPurokEntity])],
    controllers: [AreaPurokController],
    providers: [AreaPurokService]
})
export class AreaPurokModule { }