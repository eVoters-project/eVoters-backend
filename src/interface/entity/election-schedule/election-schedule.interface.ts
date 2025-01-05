import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";
import { ElectionPositionInterface } from "../election-position/election-position.interface";

export interface ElectionScheduleInterface extends BaseEntityInterface {
    date: Date;
    type: string;
    remarks: string;
    eletive_positions?: ElectionPositionInterface[];
}