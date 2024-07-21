import { BaseEntity } from "src/abstract/entity/base.entity";
import { VoterInterface, PartyInterface } from "src/interface";
import { PartyMemberInterface } from "src/interface/entity/party-member/party-member.interface";
import { Column, Entity, ManyToOne } from "typeorm";
import { VoterEntity } from "../voter/voter.entity";
import { PartyEntity } from "../party/party.entity";

@Entity('setup_party_member')
export class PartyMemberEntity extends BaseEntity implements PartyMemberInterface {

    @Column({ type: 'int' })
    sequence: number;

    @ManyToOne(() => VoterEntity, e => e.id)
    voter: VoterEntity;

    @ManyToOne(() => PartyEntity, e => e.id)
    party: PartyEntity;

}