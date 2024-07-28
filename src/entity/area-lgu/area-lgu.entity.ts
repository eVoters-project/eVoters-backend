import { BaseEntity } from "src/abstract/entity/base.entity";
import { AreaLGUInterface, AreaProvinceInterface } from "src/interface";
import { Column, Entity, ManyToOne } from "typeorm";
import { AreaProvinceEntity } from "../area-province/area-province.entity";

@Entity('setup_area_lgu')
export class AreaLGUEntity extends BaseEntity implements AreaLGUInterface {
    @Column({ type: 'nvarchar', length: 100 })
    code: string;

    @Column({ type: 'nvarchar', length: 255 })
    name: string;

    @ManyToOne(() => AreaProvinceEntity, e => e.id)
    area_province: AreaProvinceEntity;

    @Column({ type: 'nvarchar', length: 50 })
    status: string;
}