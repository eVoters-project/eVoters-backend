import { BaseEntity } from "src/abstract/entity/base.entity";
import { VoterInterface } from "src/interface";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AreaBarangayEntity } from "../area-barangay/area-barangay.entity";
import { AreaPurokEntity } from "../area-purok/area-purok.entity";

@Entity('setup_voter')
export class VoterEntity extends BaseEntity implements VoterInterface {
    @Column({ type: 'nvarchar', length: 100 })
    firstname: string;

    @Column({ type: 'nvarchar', length: 100 })
    middlename: string;

    @Column({ type: 'nvarchar', length: 100 })
    lastname: string;

    @Column({ type: 'nvarchar', length: 100 })
    nickname: string;

    @Column({ type: 'nvarchar', length: 50 })
    gender: string;

    @Column({ type: 'date' })
    date_of_birth: Date;

    @Column({ type: 'nvarchar', length: 250 })
    address: string;

    @Column({ type: 'nvarchar', length: 50 })
    precinct_no: string;

    @Column({ type: 'nvarchar', length: 50 })
    vin_no: string;

    @Column({ type: 'nvarchar', length: 50 })
    status: string;

    @Column({ type: 'nvarchar', length: 50 })
    category: string;

    @Column({ type: 'nvarchar', length: 50 })
    vote_group: string;

    @Column({ type: 'nvarchar', length: 50 })
    vote_type: string;

    @Column({ type: 'nvarchar', length: 50 })
    vote_status: string;

    @Column({ type: 'nvarchar', length: 100 })
    latitude: string;

    @Column({ type: 'nvarchar', length: 100 })
    longitude: string;

    @ManyToOne(() => AreaBarangayEntity, e => e.id)
    barangay: AreaBarangayEntity;

    @ManyToOne(() => AreaPurokEntity, e => e.id)
    purok: AreaPurokEntity;

    @Column({ type: 'boolean' })
    verified_voter: boolean;

    @Column({ type: 'boolean' })
    confirmed_leader: boolean;

    @Column({ type: 'boolean' })
    unassigned_voter: boolean;
}