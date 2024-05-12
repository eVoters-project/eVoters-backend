import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";

@Injectable()
export class LeaderService {

    constructor(private datasource: DataSource) {}

}