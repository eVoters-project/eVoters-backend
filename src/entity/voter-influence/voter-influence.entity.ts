import { VoterBaseEntityInterface } from "src/interface/entity/voter-base/voter-base.entity.interface";
import { VoterInfluenceInterface } from "src/interface/entity/voter-influence/voter-influence.interface";
import { Column, Entity, ManyToOne } from "typeorm";
import { VoterBaseEntity } from "../voter-base/voter-base.entity";
import { BaseEntity } from "src/abstract/entity/base.entity";

@Entity('setup_voter_influence')
export class VoterInfluenceEntity extends BaseEntity implements VoterInfluenceInterface {
    @Column({ type: 'nvarchar', length: 100 })
    code: string;

    @Column({ type: 'nvarchar', length: 255 })
    description: string;

    @Column({ type: 'nvarchar', length: 500 })
    remarks: string;

    @Column({ type: 'nvarchar', length: 50 })
    status: string;

    @ManyToOne(() => VoterBaseEntity, e => e.id, { nullable: true })
    voter_base: VoterBaseEntity;
}