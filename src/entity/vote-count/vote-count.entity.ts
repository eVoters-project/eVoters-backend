import { BaseEntity } from "src/abstract/entity/base.entity";
import { VoteCountEntityInterface } from "src/interface/entity/vote-count/vote-count.entity.interface";
import { Entity } from "typeorm";

@Entity('trans_vote_count')
export class VoteCountEntity extends BaseEntity implements VoteCountEntityInterface {

}