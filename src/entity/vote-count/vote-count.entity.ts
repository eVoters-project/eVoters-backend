import { BaseEntity } from "src/abstract/entity/base.entity";
import { AreaBarangayInterface, AreaPurokInterface } from "src/interface";
import { ElectionScheduleInterface } from "src/interface/entity/election-schedule/election-schedule.interface";
import { VoteCountEntityInterface } from "src/interface/entity/vote-count/vote-count.entity.interface";
import { Entity, ManyToOne } from "typeorm";
import { AreaBarangayEntity } from "../area-barangay/area-barangay.entity";
import { AreaPurokEntity } from "../area-purok/area-purok.entity";
import { ElectionScheduleEntity } from "../election-schedule/election-schedule.entity";

@Entity('trans_vote_count')
export class VoteCountEntity extends BaseEntity implements VoteCountEntityInterface {
    @ManyToOne(() => AreaBarangayEntity, e => e.id)
    area_barangay: AreaBarangayInterface;

    @ManyToOne(() => AreaPurokEntity, e => e.id)
    area_purok: AreaPurokInterface;

    @ManyToOne(() => ElectionScheduleEntity, e => e.id)
    election_schedule: ElectionScheduleInterface;
}