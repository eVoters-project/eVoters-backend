import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VoterTypeController } from "./voter-type.controller";
import { VoterTypeService } from "./voter-type.service";

@Module({
    imports: [TypeOrmModule.forFeature([])],
    controllers: [VoterTypeController],
    providers: [VoterTypeService]
})
export class VoterTypeModule { }