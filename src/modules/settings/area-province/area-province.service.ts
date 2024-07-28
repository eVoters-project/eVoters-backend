import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateAreaProvinceDto, UpdateAreaProvinceDto } from "src/dto";
import { AreaProvinceEntity } from "src/entity";
import { DataSource } from "typeorm";

@Injectable()
export class AreaProvinceService {

    constructor(private readonly datasource: DataSource) { }

    async getAll() {
        const data = await this.datasource.manager.find(AreaProvinceEntity, {
            relations: {
                area_region: true
            }
        });
        return data;
    }

    async getById(id: string) {
        const data = await this.datasource.manager.findOne(AreaProvinceEntity, {
            relations: {
                area_region: true
            },
            where: {
                id: id
            }
        });
        return data;
    }

    async create(dto: CreateAreaProvinceDto) {
        const model = this.datasource.manager.create(AreaProvinceEntity, dto);
        const data = await this.datasource.manager.save(AreaProvinceEntity, model);
        return data;
    }

    async update(id: string, dto: UpdateAreaProvinceDto) {
        return this.datasource.manager.update(AreaProvinceEntity, id, { ...dto });
    }

    async delete(id: string) {
        const data = await this.datasource.manager.findOne(AreaProvinceEntity, {
            where: {
                id: id
            }
        });
        if (data) {
            return await this.datasource.manager.remove(AreaProvinceEntity, data);
        }
        return NotFoundException;
    }

}