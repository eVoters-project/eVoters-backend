import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";

@Injectable()
export class CampaignService {

    constructor(private datasource: DataSource) {}

}