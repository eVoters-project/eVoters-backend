import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";

export interface AreaRegionInterface extends BaseEntityInterface {
    code: string;
    name: string;
    status: string;
}