import { BaseEntity } from "src/abstract/entity/base.entity";
import { ElectionPositionTemplateInterface } from "src/interface";
import { Column, Entity } from "typeorm";

@Entity('setup_election_position_template')
export class ElectionPositionTemplateEntity extends BaseEntity implements ElectionPositionTemplateInterface {

    @Column({ type: 'int' })
    sequence: number;

    @Column({ type: 'nvarchar', length: 50 })
    election_cycle: string;

    @Column({ type: 'nvarchar', length: 500 })
    remarks: string;

}