import { BaseEntity } from "src/abstract/entity/base.entity";
import { PartyMemberInterface } from "src/interface/entity/party-member/party-member.interface";
import { Column, Entity, ManyToOne } from "typeorm";
import { VoterEntity } from "../voter/voter.entity";
import { PartyEntity } from "../party/party.entity";

@Entity('setup_party_member')
export class PartyMemberEntity extends BaseEntity implements PartyMemberInterface {

    @Column({ type: 'int', default: 0 })
    sequence: number;

    @ManyToOne(() => VoterEntity, e => e.id)
    voter: VoterEntity;

    @ManyToOne(() => PartyEntity, e => e.id)
    party: PartyEntity;

}