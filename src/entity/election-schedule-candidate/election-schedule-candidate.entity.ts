import { BaseEntity } from "src/abstract/entity/base.entity";
import { ElectionScheduleCandidateInterface } from "src/interface/entity/election-schedule-candidate/election-schedule-candidate.interface";
import { Column, Entity, ManyToOne } from "typeorm";
import { VoterEntity } from "../voter/voter.entity";
import { ElectionSchedulePositionEntity } from "../election-schedule-position/election-schedule-position.entity";
import { PartyEntity } from "../party/party.entity";

@Entity('setup_election_schedule_candidate')
export class ElectionScheduleCandidateEntity extends BaseEntity implements ElectionScheduleCandidateInterface {
    @Column({ type: 'int' })
    sequence: number;

    @ManyToOne(() => ElectionSchedulePositionEntity, e => e.id)
    election_schedule_position: ElectionSchedulePositionEntity;

    @ManyToOne(() => PartyEntity, e => e.id)
    party: PartyEntity;

    @ManyToOne(() => VoterEntity, e => e.id)
    voter: VoterEntity;

    @Column({ type: 'nvarchar', length: 50 })
    status: string;
}