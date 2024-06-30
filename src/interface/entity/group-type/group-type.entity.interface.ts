import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";

export interface GroupTypeEntityInterface extends BaseEntityInterface {
    name: string;
    description: string;
    status: string;
}