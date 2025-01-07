import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateElectionPrecinctDto } from "src/dto/election-precinct/create-election-precinct.dto";
import { ResponseElectionPrecinctDto } from "src/dto/election-precinct/response-election-precinct.dto";
import { UpdateElectionPrecinctDto } from "src/dto/election-precinct/update-election-precinct.dto";
import { AreaBarangayEntity } from "src/entity";
import { ElectionPrecinctEntity } from "src/entity/election-precinct/election-precinct.entity";
import { DataSource } from "typeorm";

@Injectable()
export class ElectionPrecinctService {
    constructor(private readonly datasource: DataSource) { }

    async getAll() {
        const data = await this.datasource.manager.find(ElectionPrecinctEntity, {
            relations: {
                area_barangay: true
            },
            order: {
                cluster: 'ASC',
                sub_cluster: 'ASC'
            }
        });
        return this.responseDtoArray(data);
    }

    async getById(id: string) {
        const data = await this.datasource.manager.findOne(ElectionPrecinctEntity, {
            where: {
                id: id
            }
        });
        return this.responseDto(data);
    }

    async getByBarangay(id: string) {
        const data = await this.datasource.manager.find(ElectionPrecinctEntity, {
            relations: {
                area_barangay: true
            },
            where: {
                area_barangay: {
                    id: id
                }
            },
            order: {
                cluster: 'ASC',
                sub_cluster: 'ASC'
            }
        });
        return this.responseDtoArray(data);
    }

    async create(dto: CreateElectionPrecinctDto) {
        const model = this.datasource.manager.create(ElectionPrecinctEntity, dto);
        const data = await this.datasource.manager.save(ElectionPrecinctEntity, model);
        return this.responseDto(data);
    }

    async update(id: string, dto: UpdateElectionPrecinctDto) {
        return this.datasource.manager.update(ElectionPrecinctEntity, id, { ...dto });
    }

    async updateElectivePositions() {

    }

    async delete(id: string) {
        const data = await this.datasource.manager.findOne(ElectionPrecinctEntity, {
            where: {
                id: id
            }
        });

        if (data) {
            return this.datasource.manager.remove(ElectionPrecinctEntity, data);
        }

        return new NotFoundException();
    }

    private responseDto(entity: ElectionPrecinctEntity): ResponseElectionPrecinctDto {
        return Object.assign(new ResponseElectionPrecinctDto(), (({
            id, code, cluster, sub_cluster, polling_center, status
        }) => ({
            id, code, cluster, sub_cluster, polling_center, status
        }))(entity));
    }

    private responseDtoArray(entity: ElectionPrecinctEntity[]): ResponseElectionPrecinctDto[] {
        const rDto: ResponseElectionPrecinctDto[] = [];
        entity.forEach(e => {
            rDto.push(Object.assign(new ResponseElectionPrecinctDto(), (({
                id, code, cluster, sub_cluster, polling_center, area_barangay, status
            }) => ({
                id, code, cluster, sub_cluster, polling_center, barangay: area_barangay?.name, status
            }))(e)))
        });
        return rDto;
    }
}