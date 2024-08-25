import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";

export interface PositionInterface extends BaseEntityInterface {
    sequence: number;
    code: string;
    name: string;
    description: string;
    level: string;
    election_cycle: string;
    status: string;
}