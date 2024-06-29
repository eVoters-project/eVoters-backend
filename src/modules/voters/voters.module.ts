import { Module } from "@nestjs/common";
import { VotersService } from "./voters.service";
import { VotersController } from "./voters.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VoterEntity } from "src/entity";

@Module({
    imports: [TypeOrmModule.forFeature([VoterEntity])],
    controllers: [VotersController],
    providers: [VotersService]
})
export class VotersModule {}