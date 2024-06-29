import { BaseEntity } from "src/abstract/entity/base.entity";
import { LeaderEntityInterface } from "src/interface";
import { Entity } from "typeorm";

@Entity('setup_leader')
export class LeaderEntity extends BaseEntity implements LeaderEntityInterface {

}