import { BaseEntity } from "src/abstract/entity/base.entity";
import { ElectionPositionTemplateDetailInterface } from "src/interface";
import { Column, Entity, ManyToOne } from "typeorm";
import { PositionEntity } from "../position/position.entity";
import { ElectionPositionTemplateEntity } from "../election-position-template/election-position-template.entity";

@Entity('setup_election_position_template_detail')
export class ElectionPositionTemplateDetailEntity extends BaseEntity implements ElectionPositionTemplateDetailInterface {

    @Column({ type: 'int' })
    sequence: number;

    @ManyToOne(() => PositionEntity, e => e.id)
    position: PositionEntity;

    @Column({ type: 'int' })
    seat: number;

    @Column({ type: 'nvarchar', length: 500 })
    remarks: string;

    @ManyToOne(() => ElectionPositionTemplateEntity, e => e.id)
    election_position_template: ElectionPositionTemplateEntity;

}