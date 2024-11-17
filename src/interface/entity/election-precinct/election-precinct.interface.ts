import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";
import { AreaBarangayInterface } from "../area-barangay/area-barangay.interface";

export interface ElectionPrecinctInterface extends BaseEntityInterface {
    sequence: number;
    code: string;
    cluster: number;
    sub_cluster: string;
    polling_center: string;
    area_barangay: AreaBarangayInterface
    status: string;
}