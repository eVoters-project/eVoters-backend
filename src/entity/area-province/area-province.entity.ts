import { BaseEntity } from "src/abstract/entity/base.entity";
import { AreaProvinceInterface, AreaRegionInterface } from "src/interface";
import { Column, Entity, ManyToOne } from "typeorm";
import { AreaRegionEntity } from "../area-region/area-region.entity";

@Entity('setup_area_province')
export class AreaProvinceEntity extends BaseEntity implements AreaProvinceInterface {
    @Column({ type: 'nvarchar', length: 100 })
    code: string;

    @Column({ type: 'nvarchar', length: 255 })
    name: string;

    @ManyToOne(() => AreaRegionEntity, e => e.id)
    area_region: AreaRegionEntity;

    @Column({ type: 'nvarchar', length: 50 })
    status: string;
}