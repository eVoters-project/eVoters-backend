import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";

@Injectable()
export class StrawVoteService {

    constructor(private datasource: DataSource) {}

}