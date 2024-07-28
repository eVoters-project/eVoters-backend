import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";
import { AreaRegionInterface } from "../area-region/area-region.interface";

export interface AreaProvinceInterface extends BaseEntityInterface {
    code: string;
    name: string;
    area_region: AreaRegionInterface;
    status: string;
}