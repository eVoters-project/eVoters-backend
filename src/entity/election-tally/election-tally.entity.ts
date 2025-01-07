import { BaseEntity } from "src/abstract/entity/base.entity";
import { ElectionTallyInterface } from "src/interface";
import { Column, Entity, ManyToOne } from "typeorm";
import { ElectionCandidateEntity } from "../election-candidate/election-candidate.entity";
import { ElectionPrecinctEntity } from "../election-precinct/election-precinct.entity";
import { ElectionPositionEntity } from "../election-position/election-position.entity";

@Entity('trx_election_tally')
export class ElectionTallyEntity extends BaseEntity implements ElectionTallyInterface {

    @Column({ type: 'date' })
    date: Date;

    @ManyToOne(() => ElectionPositionEntity, e => e.id)
    position: ElectionPositionEntity;

    @ManyToOne(() => ElectionCandidateEntity, e => e.id)
    candidate: ElectionCandidateEntity;

    @ManyToOne(() => ElectionPrecinctEntity, e => e.id)
    precinct: ElectionPrecinctEntity;

    @Column({ type: 'nvarchar', length: 50 })
    type: string;

    @Column({ type: 'int' })
    count: number;

}