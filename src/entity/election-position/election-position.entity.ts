import { BaseEntity } from "src/abstract/entity/base.entity";
import { ElectionPositionInterface } from "src/interface";
import { Column, Entity } from "typeorm";

@Entity('setup_election_position')
export class ElectionPositionEntity extends BaseEntity implements ElectionPositionInterface {
    @Column({ type: 'smallint', default: 0 })
    sequence: number;

    @Column({ type: 'nvarchar', length: 50 })
    code: string;

    @Column({ type: 'nvarchar', length: 100 })
    name: string;

    @Column({ type: 'nvarchar', length: 500 })
    description: string;

    @Column({ type: 'nvarchar', length: 50 })
    status: string;
}