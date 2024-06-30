import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GroupTypeEntity } from "src/entity/group-type/group-type.entity";
import { GroupTypeController } from "./group-type.controller";
import { GroupTypeService } from "./group-type.service";

@Module({
    imports: [TypeOrmModule.forFeature([GroupTypeEntity])],
    controllers: [GroupTypeController],
    providers: [GroupTypeService]
})
export class GroupTypeModule {}