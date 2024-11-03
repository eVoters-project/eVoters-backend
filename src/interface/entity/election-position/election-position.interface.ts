import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";

export interface ElectionPositionInterface extends BaseEntityInterface {
    sequence: number;
    code: string;
    name: string;
    description: string;
    status: string;
}