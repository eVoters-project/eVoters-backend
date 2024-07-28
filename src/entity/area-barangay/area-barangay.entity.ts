import { BaseEntity } from "src/abstract/entity/base.entity";
import { AreaBarangayInterface, AreaLGUInterface } from "src/interface";
import { Column, Entity, ManyToMany, ManyToOne } from "typeorm";
import { AreaLGUEntity } from "../area-lgu/area-lgu.entity";

@Entity('setup_area_barangay')
export class AreaBarangayEntity extends BaseEntity implements AreaBarangayInterface {
    @Column({ type: 'nvarchar', length: 100 })
    code: string;

    @Column({ type: 'nvarchar', length: 255 })
    name: string;

    @ManyToOne(() => AreaLGUEntity, e => e.id)
    area_lgu: AreaLGUEntity;

    @Column({ type: 'nvarchar', length: 50 })
    status: string;
}