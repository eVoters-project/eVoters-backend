import { BaseEntity } from "src/abstract/entity/base.entity";
import { PartyEntityInterface } from "src/interface/entity/party/party.entity.interface";
import { Entity } from "typeorm";

@Entity('setup_party')
export class PartyEntity extends BaseEntity implements PartyEntityInterface {
    
}