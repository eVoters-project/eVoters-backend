import { BaseEntity } from "src/abstract/entity/base.entity";
import { AreaRegionInterface } from "src/interface";
import { Column, Entity } from "typeorm";

@Entity('setup_area_region')
export class AreaRegionEntity extends BaseEntity implements AreaRegionInterface {
    @Column({ type: 'nvarchar', length: 100 })
    code: string;

    @Column({ type: 'nvarchar', length: 255 })
    name: string;

    @Column({ type: 'nvarchar', length: 50 })
    status: string;
}