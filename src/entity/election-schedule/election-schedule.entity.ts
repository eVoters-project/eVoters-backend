import { BaseEntity } from "src/abstract/entity/base.entity";
import { ElectionScheduleInterface } from "src/interface/entity/election-schedule/election-schedule.interface";
import { Column, Entity, OneToMany } from "typeorm";
import { ElectionSchedulePositionEntity } from "../election-schedule-position/election-schedule-position.entity";

@Entity('setup_election_schedule')
export class ElectionScheduleEntity extends BaseEntity implements ElectionScheduleInterface {
    @Column({ type: 'date' })
    date: Date;

    @Column({ type: 'nvarchar', length: 50 })
    type: string;

    @Column({ type: 'nvarchar', length: 255 })
    remarks: string;

    @OneToMany(() => ElectionSchedulePositionEntity, e => e.election_schedule)
    elective_positions: ElectionSchedulePositionEntity[]
}