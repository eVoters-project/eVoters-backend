import { BaseEntity } from "src/abstract/entity/base.entity";
import { VoterLeaderInterface, VoterLeaderSubInterface } from "src/interface";
import { Column, Entity, ManyToOne } from "typeorm";
import { VoterLeaderSubEntity } from "../voter-leader-sub/voter-leader-sub.entity";

@Entity('setup_voter_leader')
export class VoterLeaderEntity extends BaseEntity implements VoterLeaderInterface {
    @Column({ type: 'nvarchar', length: 100 })
    code: string;

    @Column({ type: 'nvarchar', length: 255 })
    description: string;

    @Column({ type: 'nvarchar', length: 50 })
    status: string;

    @Column({ type: 'nvarchar', length: 500 })
    remarks: string;

    @ManyToOne(() => VoterLeaderSubEntity, e => e.id)
    voter_leader_sub: Partial<VoterLeaderSubEntity>;
}