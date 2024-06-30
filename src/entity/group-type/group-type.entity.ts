import { BaseEntity } from "src/abstract/entity/base.entity";
import { GroupTypeEntityInterface } from "src/interface/entity/group-type/group-type.entity.interface";
import { Column, Entity } from "typeorm";

@Entity('setup_group_type')
export class GroupTypeEntity extends BaseEntity implements GroupTypeEntityInterface {
    @Column({ type: 'nvarchar', length: 50 })
    name: string;

    @Column({ type: 'nvarchar', length: 255 })
    description: string;
    
    @Column({ type: 'nvarchar', length: 50 })
    status: string;
}