import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateAreaPurokDto, ResponseAreaPurokDto, UpdateAreaPurokDto } from "src/dto";
import { AreaPurokEntity } from "src/entity/area-purok/area-purok.entity";
import { DataSource } from "typeorm";

@Injectable()
export class AreaPurokService {

    constructor(private readonly datasource: DataSource) { }

    async getAll() {
        const data = await this.datasource.manager.find(AreaPurokEntity, {
            relations: {
                area_barangay: true
            }
        });
        return this.responseDtoArray(data);
    }

    async getById(id: string) {
        const data = await this.datasource.manager.findOne(AreaPurokEntity, {
            relations: {
                area_barangay: true
            },
            where: {
                id: id
            }
        });
        return this.responseDto(data);
    }

    async create(dto: CreateAreaPurokDto) {
        const model = this.datasource.manager.create(AreaPurokEntity, dto);
        const data = await this.datasource.manager.save(AreaPurokEntity, model);
        return this.responseDto(data);
    }

    async update(id: string, dto: UpdateAreaPurokDto) {
        return this.datasource.manager.update(AreaPurokEntity, id, { ...dto });
    }

    async delete(id: string) {
        const data = await this.datasource.manager.findOne(AreaPurokEntity, {
            where: {
                id: id
            }
        });
        if (data) {
            return await this.datasource.manager.remove(AreaPurokEntity, data);
        }
        return NotFoundException;
    }

    private responseDto(entity: AreaPurokEntity): ResponseAreaPurokDto {
        return Object.assign(new ResponseAreaPurokDto(), (({
            created_at, updated_at, area_barangay, ...purok
        }) => ({
            ...purok,
            barangay: (({ name }) => name)(area_barangay),
        }))(entity));
    }

    private responseDtoArray(entity: AreaPurokEntity[]): ResponseAreaPurokDto[] {
        const rDto: ResponseAreaPurokDto[] = [];
        entity.forEach(e => {
            rDto.push(Object.assign(new ResponseAreaPurokDto(), (({
                created_at, updated_at, area_barangay, ...purok
            }) => ({
                ...purok,
                barangay: (({ name }) => name)(area_barangay)
            }))(e)))
        });
        return rDto;
    }

}