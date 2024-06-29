import { BaseEntity } from "src/abstract/entity/base.entity";
import { StrawVoteEntityInterface } from "src/interface/entity/straw-vote/straw-vote.entity.interface";
import { Entity } from "typeorm";

@Entity('trans_straw_vote')
export class StrawVoteEntity extends BaseEntity implements StrawVoteEntityInterface {
    
}