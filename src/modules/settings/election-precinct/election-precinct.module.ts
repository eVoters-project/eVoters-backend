import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ElectionPrecinctController } from "./election-precinct.controller";
import { ElectionPrecinctService } from "./election-precinct.service";
import { ElectionPrecinctEntity } from "src/entity/election-precinct/election-precinct.entity";

@Module({
    imports: [TypeOrmModule.forFeature([ElectionPrecinctEntity])],
    controllers: [ElectionPrecinctController],
    providers: [ElectionPrecinctService]
})
export class ElectionPrecinctModule { }