import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";
import { AreaLGUInterface } from "../area-lgu/area-lgu.interface";

export interface AreaBarangayInterface extends BaseEntityInterface {
    code: string;
    name: string;
    area_lgu: AreaLGUInterface;
    status: string;
}