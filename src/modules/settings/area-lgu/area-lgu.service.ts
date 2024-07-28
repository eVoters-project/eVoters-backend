import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateAreaLGUDto, UpdateAreaLGUDto } from "src/dto";
import { AreaLGUEntity } from "src/entity";
import { DataSource } from "typeorm";

@Injectable()
export class AreaLGUService {

    constructor(private readonly datasource: DataSource) { }

    async getAll() {
        const data = await this.datasource.manager.find(AreaLGUEntity, {
            relations: {
                area_province: true
            }
        });
        return data;
    }

    async getById(id: string) {
        const data = await this.datasource.manager.findOne(AreaLGUEntity, {
            relations: {
                area_province: true
            },
            where: {
                id: id
            }
        });
        return data;
    }

    async create(dto: CreateAreaLGUDto) {
        const model = this.datasource.manager.create(AreaLGUEntity, dto);
        const data = await this.datasource.manager.save(AreaLGUEntity, model);
        return data;
    }

    async update(id: string, dto: UpdateAreaLGUDto) {
        return this.datasource.manager.update(AreaLGUEntity, id, { ...dto });
    }

    async delete(id: string) {
        const data = await this.datasource.manager.findOne(AreaLGUEntity, {
            where: {
                id: id
            }
        });
        if (data) {
            return await this.datasource.manager.remove(AreaLGUEntity, data);
        }
        return NotFoundException;
    }

}