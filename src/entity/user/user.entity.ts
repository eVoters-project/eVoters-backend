import { BaseEntity } from "src/abstract/entity/base.entity";
import { UserEntityInterface } from "src/interface";
import { Column, Entity } from "typeorm";

@Entity('setup_user')
export class UserEntity extends BaseEntity implements UserEntityInterface {

    @Column({ type: 'nvarchar', length: 250 })
    email: string;

    @Column({ type: 'nvarchar', length: 600 })
    password: string;

    @Column({ type: 'nvarchar', length: 30 })
    mobile: string;
}