import { BaseEntity } from "src/abstract/entity/base.entity";
import { VoterPositionInterface } from "src/interface";
import { Column, Entity } from "typeorm";

@Entity('setup_voter_position')
export class VoterPositionEntity extends BaseEntity implements VoterPositionInterface {
    @Column({ type: 'nvarchar', length: 100 })
    code: string;

    @Column({ type: 'nvarchar', length: 255 })
    description: string;

    @Column({ type: 'nvarchar', length: 50 })
    status: string;
}