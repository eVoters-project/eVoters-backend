import { BaseEntity } from "src/abstract/entity/base.entity";
import { VoterLeaderSubInterface } from "src/interface";
import { Column, Entity } from "typeorm";

@Entity('setup_voter_leader_sub')
export class VoterLeaderSubEntity extends BaseEntity implements VoterLeaderSubInterface {
    @Column({ type: 'nvarchar', length: 100 })
    code: string;

    @Column({ type: 'nvarchar', length: 255 })
    description: string;

    @Column({ type: 'nvarchar', length: 50 })
    status: string;
}