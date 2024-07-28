import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";
import { AreaProvinceInterface } from "../area-province/area-province.interface";

export interface AreaLGUInterface extends BaseEntityInterface {
    code: string;
    name: string;
    area_province: AreaProvinceInterface;
    status: string;
}