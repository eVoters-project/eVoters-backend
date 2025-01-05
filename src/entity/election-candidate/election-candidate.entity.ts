import { BaseEntity } from "src/abstract/entity/base.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { VoterEntity } from "../voter/voter.entity";
import { ElectionCandidateInterface, PartyMemberInterface } from "src/interface";
import { ElectionScheduleEntity } from "../election-schedule/election-schedule.entity";
import { PartyMemberEntity } from "../party-member/party-member.entity";
import { ElectionPositionEntity } from "../election-position/election-position.entity";
import { Validate, ValidateIf } from "class-validator";
import { IsPartyMemberOrVoterConstraint } from "src/@validator";

@Entity('setup_election_candidate')
export class ElectionCandidateEntity extends BaseEntity implements ElectionCandidateInterface {
    @Column({ type: 'int' })
    sequence: number;

    @ManyToOne(() => ElectionPositionEntity, e => e.id)
    position: ElectionPositionEntity;

    @ManyToOne(() => PartyMemberEntity, e => e.id, { nullable: true })
    @Validate(IsPartyMemberOrVoterConstraint)
    party_member: PartyMemberInterface;

    @ManyToOne(() => VoterEntity, e => e.id, { nullable: true })
    @Validate(IsPartyMemberOrVoterConstraint)
    voter: VoterEntity;

    @Column({ type: 'nvarchar', length: 500 })
    remarks: string;

    @Column({ type: 'nvarchar', length: 50 })
    status: string;
}