
import { BaseEntity } from "src/abstract/entity/base.entity";
import { VoterBaseEntityInterface } from "src/interface/entity/voter-base/voter-base.entity.interface";
import { Column, Entity } from "typeorm";

@Entity('setup_voter_base')
export class VoterBaseEntity extends BaseEntity implements VoterBaseEntityInterface {
    @Column({ type: 'nvarchar', length: 100 })
    code: string;

    @Column({ type: 'nvarchar', length: 255 })
    description: string;
}