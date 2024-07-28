import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";
import { AreaBarangayInterface } from "../area-barangay/area-barangay.interface";

export interface AreaPurokInterface extends BaseEntityInterface {
    code: string;
    name: string;
    area_barangay: AreaBarangayInterface;
    status: string;
}