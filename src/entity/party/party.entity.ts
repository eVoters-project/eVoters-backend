import { BaseEntity } from "src/abstract/entity/base.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { VoterEntity } from "../voter/voter.entity";
import { PartyInterface } from "src/interface";
import { LeaderEntity } from "../leader/leader.entity";

@Entity('setup_party')
export class PartyEntity extends BaseEntity implements PartyInterface {

    @Column({ type: 'nvarchar', length: 100 })
    code: string;

    @Column({ type: 'nvarchar', length: 150 })
    name: string;

    @Column({ type: 'nvarchar', length: 255 })
    description: string;

    @Column({ type: 'nvarchar', length: 500 })
    remarks: string;

    @Column({ type: 'nvarchar', length: 50 })
    status: string;

    @ManyToOne(() => LeaderEntity, e => e.id)
    leader: LeaderEntity;

}