import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateCampaignDto } from "src/dto/campaign/create-campaign.dto";
import { ResponseCampaignDto } from "src/dto/campaign/response-campaign.dto";
import { UpdateCampaignDto } from "src/dto/campaign/update-campaign.dto";
import { CampaignEntity } from "src/entity";
import { DataSource } from "typeorm";

@Injectable()
export class CampaignService {

    constructor(private datasource: DataSource) { }

    async getAll() {
        const data = await this.datasource.manager.find(CampaignEntity);
        return this.responseDtoArray(data);
    }

    async getById(id: string) {
        const data = await this.datasource.manager.findOne(CampaignEntity, {
            where: {
                id: id
            }
        });
        return this.responseDto(data);
    }

    async create(dto: CreateCampaignDto) {
        const model = this.datasource.manager.create(CampaignEntity, dto);
        const data = await this.datasource.manager.save(CampaignEntity, model);
        return this.responseDto(data);
    }

    async update(id: string, dto: UpdateCampaignDto) {
        return await this.datasource.manager.update(CampaignEntity, id, { ...dto });
    }

    async delete(id: string) {
        var campaign = await this.datasource.manager.findOne(CampaignEntity, {
            where: {
                id: id
            }
        });

        if (campaign) {
            return this.datasource.manager.remove(CampaignEntity, campaign);
        }
        return NotFoundException;
    }

    private responseDto(entity: CampaignEntity): ResponseCampaignDto {
        return Object.assign(new ResponseCampaignDto(), (({
            created_at, updated_at, ...campaign
        }) => ({
            ...campaign
        }))(entity));
    }

    private responseDtoArray(entity: CampaignEntity[]): ResponseCampaignDto[] {
        const rDto: ResponseCampaignDto[] = [];
        entity.forEach(e => {
            rDto.push(Object.assign(new ResponseCampaignDto(), (({
                created_at, updated_at, ...campaign
            }) => ({
                ...campaign
            }))(e)))
        });
        return rDto;
    }

}