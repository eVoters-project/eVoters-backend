import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VoterBaseEntity } from "src/entity/voter-base/voter-base.entity";
import { VoterBaseService } from "./voter-base.service";
import { VoterBaseController } from "./voter-base.controller";

@Module({
    imports: [TypeOrmModule.forFeature([VoterBaseEntity])],
    controllers: [VoterBaseController],
    providers: [VoterBaseService]
})
export class VoterBaseModule { }