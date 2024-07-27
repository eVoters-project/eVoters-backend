import { BaseEntity } from "src/abstract/entity/base.entity";
import { LeaderInterface, VoterInterface, VoterLeaderInterface } from "src/interface";
import { Column, Entity, ManyToOne } from "typeorm";
import { VoterEntity } from "../voter/voter.entity";
import { VoterLeaderEntity } from "../voter-leader/voter-leader.entity";

@Entity('setup_leader')
export class LeaderEntity extends BaseEntity implements LeaderInterface {
    @ManyToOne(() => VoterEntity, e => e.id)
    voter: VoterInterface;

    @ManyToOne(() => VoterLeaderEntity, e => e.id)
    voter_leader: VoterLeaderInterface;

    @Column({ type: 'nvarchar', length: 50 })
    status: string;
}