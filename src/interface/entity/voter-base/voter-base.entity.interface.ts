import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";

export interface VoterBaseEntityInterface extends BaseEntityInterface {
    code: string;
    description: string;
}