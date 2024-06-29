import { Module } from "@nestjs/common";
import { PartyController } from "./party.controller";
import { PartyService } from "./party.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PartyEntity } from "src/entity";

@Module({
    imports: [TypeOrmModule.forFeature([PartyEntity])],
    controllers: [PartyController],
    providers: [PartyService]
})
export class PartyModule {}