import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";

@Injectable()
export class DashboardService {

    constructor(private datasource: DataSource) {}

}