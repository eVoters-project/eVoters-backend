import { BaseEntity } from "src/abstract/entity/base.entity";
import { ElectionPrecinctInterface } from "src/interface/entity/election-precinct/election-precinct.interface";
import { Column, Entity, ManyToOne } from "typeorm";
import { AreaBarangayEntity } from "../area-barangay/area-barangay.entity";

@Entity('setup_election_precinct')
export class ElectionPrecinctEntity extends BaseEntity implements ElectionPrecinctInterface {

    @Column({ type: 'smallint', default: 0 })
    sequence: number;

    @Column({ type: 'nvarchar', length: 50 })
    code: string;

    @Column({ type: 'smallint', default: 0 })
    cluster: number;

    @Column({ type: 'nvarchar', length: 50 })
    sub_cluster: string;

    @Column({ type: 'nvarchar', length: 500 })
    polling_center: string;

    @ManyToOne(() => AreaBarangayEntity, e => e.id)
    area_barangay: AreaBarangayEntity;

    @Column({ type: 'nvarchar', length: 50 })
    status: string;
}