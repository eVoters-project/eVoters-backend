import { BaseEntity } from "src/abstract/entity/base.entity";
import { ElectionSchedulePositionInterface } from "src/interface/entity/election-schedule-position/election-schedule-position.interface";
import { Column, Entity, ManyToOne } from "typeorm";
import { PositionEntity } from "../position/position.entity";
import { ElectionScheduleEntity } from "../election-schedule/election-schedule.entity";

@Entity('setup_election_schedule_position')
export class ElectionSchedulePositionEntity extends BaseEntity implements ElectionSchedulePositionInterface {
    @Column({ type: 'smallint' })
    sequence: number;

    @ManyToOne(() => PositionEntity, e => e.id)
    position: PositionEntity;

    @Column({ type: 'smallint' })
    quantity: number;

    @Column({ type: 'nvarchar', length: 255 })
    remarks: string;

    @ManyToOne(() => ElectionScheduleEntity, e => e.id)
    election_schedule: ElectionScheduleEntity;
}