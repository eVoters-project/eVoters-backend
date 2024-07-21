import { BaseEntity } from "src/abstract/entity/base.entity";
import { VoterStatusInterface } from "src/interface";
import { Column, Entity } from "typeorm";

@Entity('setup_voter_status')
export class VoterStatusEntity extends BaseEntity implements VoterStatusInterface {
    @Column({ type: 'nvarchar', length: 100 })
    code: string;

    @Column({ type: 'nvarchar', length: 255 })
    description: string;

    @Column({ type: 'nvarchar', length: 50 })
    status: string;
}