import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateAreaBarangayDto, UpdateAreaBarangayDto } from "src/dto";
import { AreaBarangayEntity } from "src/entity";
import { DataSource } from "typeorm";

@Injectable()
export class AreaBarangayService {

    constructor(private readonly datasource: DataSource) { }

    async getAll() {
        const data = await this.datasource.manager.find(AreaBarangayEntity, {
            relations: {
                area_lgu: true
            }
        });
        return data;
    }

    async getById(id: string) {
        const data = await this.datasource.manager.findOne(AreaBarangayEntity, {
            relations: {
                area_lgu: true
            },
            where: {
                id: id
            }
        });
        return data;
    }

    async create(dto: CreateAreaBarangayDto) {
        const model = this.datasource.manager.create(AreaBarangayEntity, dto);
        const data = await this.datasource.manager.save(AreaBarangayEntity, model);
        return data;
    }

    async update(id: string, dto: UpdateAreaBarangayDto) {
        return this.datasource.manager.update(AreaBarangayEntity, id, { ...dto });
    }

    async delete(id: string) {
        const data = await this.datasource.manager.findOne(AreaBarangayEntity, {
            where: {
                id: id
            }
        });
        if (data) {
            return await this.datasource.manager.remove(AreaBarangayEntity, data);
        }
        return NotFoundException;
    }

}