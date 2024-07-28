import { TypeOrmModule } from "@nestjs/typeorm";
import { AreaProvinceEntity } from "src/entity";
import { AreaProvinceController } from "./area-province.controller";
import { AreaProvinceService } from "./area-province.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([AreaProvinceEntity])],
    controllers: [AreaProvinceController],
    providers: [AreaProvinceService]
})
export class AreaProvinceModule { }