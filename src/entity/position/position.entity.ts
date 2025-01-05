import { BaseEntity } from "src/abstract/entity/base.entity";
import { PositionInterface } from "src/interface/entity/position/position.interface";
import { Column, Entity } from "typeorm";

@Entity('setup_position')
export class PositionEntity extends BaseEntity implements PositionInterface {
    @Column({ type: 'smallint' })
    sequence: number;

    @Column({ type: 'nvarchar', length: 100 })
    code: string;

    @Column({ type: 'nvarchar', length: 255 })
    name: string;

    @Column({ type: 'nvarchar', length: 500 })
    description: string;

    @Column({ type: 'nvarchar', length: 50 })
    level: string;

    @Column({ type: 'nvarchar', length: 50 })
    type: string;

    @Column({ type: 'nvarchar', length: 50 })
    election_cycle: string;

    @Column({ type: 'nvarchar', length: 50 })
    status: string;
}