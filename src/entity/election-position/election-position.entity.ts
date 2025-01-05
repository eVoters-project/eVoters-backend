import { BaseEntity } from "src/abstract/entity/base.entity";
import { ElectionPositionInterface } from "src/interface";
import { Column, Entity, ManyToOne } from "typeorm";
import { PositionEntity } from "../position/position.entity";
import { ElectionScheduleEntity } from "../election-schedule/election-schedule.entity";

@Entity('setup_election_position')
export class ElectionPositionEntity extends BaseEntity implements ElectionPositionInterface {

    @Column({ type: 'smallint', default: 1 })
    sequence: number;

    @Column({ type: 'smallint', default: 1 })
    seat: number;

    @Column({ type: 'nvarchar', length: 500 })
    remarks: string;

    @ManyToOne(() => PositionEntity, e => e.id, { lazy: false })
    position: PositionEntity;

    @ManyToOne(() => ElectionScheduleEntity, e => e.id)
    election_schedule: ElectionScheduleEntity;

}