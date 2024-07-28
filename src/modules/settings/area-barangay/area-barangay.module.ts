import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AreaBarangayEntity } from "src/entity";
import { AreaBarangayController } from "./area-barangay.controller";
import { AreaBarangayService } from "./area-barangay.service";

@Module({
    imports: [TypeOrmModule.forFeature([AreaBarangayEntity])],
    controllers: [AreaBarangayController],
    providers: [AreaBarangayService]
})
export class AreaBarangayModule { }