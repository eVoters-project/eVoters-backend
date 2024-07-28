import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";

export interface PositionInterface extends BaseEntityInterface {
    code: string;
    name: string;
    description: string;
    status: string;
}