import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AreaRegionService } from "./area-region.service";
import { AreaRegionController } from "./area-region.controller";
import { AreaRegionEntity } from "src/entity";

@Module({
    imports: [TypeOrmModule.forFeature([AreaRegionEntity])],
    controllers: [AreaRegionController],
    providers: [AreaRegionService]
})
export class AreaRegionModule { }