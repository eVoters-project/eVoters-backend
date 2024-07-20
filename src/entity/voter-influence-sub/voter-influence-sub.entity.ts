import { Column, Entity, ManyToOne } from "typeorm";
import { VoterInfluenceEntity } from "../voter-influence/voter-influence.entity";
import { VoterInfluenceSubInterface } from "src/interface";
import { BaseEntity } from "src/abstract/entity/base.entity";

@Entity('setup_voter_influence_sub')
export class VoterInfluenceSubEntity extends BaseEntity implements VoterInfluenceSubInterface {

    @Column({ type: 'nvarchar', length: 100 })
    code: string;

    @Column({ type: 'nvarchar', length: 255 })
    description: string;

    @Column({ type: 'nvarchar', length: 500 })
    remarks: string;

    @Column({ type: 'nvarchar', length: 50 })
    status: string;

    @ManyToOne(() => VoterInfluenceEntity, e => e.id)
    voter_influence: VoterInfluenceEntity;
}