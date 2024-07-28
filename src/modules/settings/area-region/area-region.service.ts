import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateAreaRegionDto, UpdateAreaRegionDto } from "src/dto";
import { AreaRegionEntity } from "src/entity";
import { DataSource } from "typeorm";

@Injectable()
export class AreaRegionService {

    constructor(private readonly datasource: DataSource) { }

    async getAll() {
        const data = await this.datasource.manager.find(AreaRegionEntity);
        return data;
    }

    async getById(id: string) {
        const data = await this.datasource.manager.findOne(AreaRegionEntity, {
            where: {
                id: id
            }
        });
        return data;
    }

    async create(dto: CreateAreaRegionDto) {
        const model = this.datasource.manager.create(AreaRegionEntity, dto);
        const data = await this.datasource.manager.save(AreaRegionEntity, model);
        return data;
    }

    async update(id: string, dto: UpdateAreaRegionDto) {
        return this.datasource.manager.update(AreaRegionEntity, id, { ...dto });
    }

    async delete(id: string) {
        const data = await this.datasource.manager.findOne(AreaRegionEntity, {
            where: {
                id: id
            }
        });
        if (data) {
            return await this.datasource.manager.remove(AreaRegionEntity, data);
        }
        return NotFoundException;
    }

}