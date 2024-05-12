import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";

@Injectable()
export class PartyService {

    constructor(private datasource: DataSource) {}

}