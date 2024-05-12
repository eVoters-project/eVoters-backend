import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";

@Injectable()
export class VotersService {

    constructor(private datasource: DataSource) {}

}