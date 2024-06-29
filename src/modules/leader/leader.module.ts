import { Module } from "@nestjs/common";
import { LeaderController } from "./leader.controller";
import { LeaderService } from "./leader.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LeaderEntity } from "src/entity";

@Module({
    imports: [TypeOrmModule.forFeature([LeaderEntity])],
    controllers: [LeaderController],
    providers: [LeaderService]
})
export class LeaderModule {}