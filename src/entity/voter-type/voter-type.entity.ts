import { BaseEntity } from "src/abstract/entity/base.entity";
import { VoterTypeInterface } from "src/interface";
import { Column, Entity } from "typeorm";

@Entity('setup_voter_type')
export class VoterTypeEntity extends BaseEntity implements VoterTypeInterface {

    @Column({ type: 'nvarchar', length: 100 })
    code: string;

    @Column({ type: 'nvarchar', length: 255 })
    description: string;

    @Column({ type: 'nvarchar', length: 50 })
    status: string;

}