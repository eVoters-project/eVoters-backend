import { BaseEntity } from "src/abstract/entity/base.entity";
import { AreaBarangayInterface, AreaPurokInterface } from "src/interface";
import { Column, Entity, ManyToOne } from "typeorm";
import { AreaBarangayEntity } from "../area-barangay/area-barangay.entity";

@Entity('setup_area_purok')
export class AreaPurokEntity extends BaseEntity implements AreaPurokInterface {
    @Column({ type: 'nvarchar', length: 100 })
    code: string;

    @Column({ type: 'nvarchar', length: 255 })
    name: string;

    @ManyToOne(() => AreaBarangayEntity, e => e.id)
    area_barangay: AreaBarangayEntity;

    @Column({ type: 'nvarchar', length: 50 })
    status: string;
}