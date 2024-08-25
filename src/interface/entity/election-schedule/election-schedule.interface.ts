import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";
import { ElectionSchedulePositionInterface } from "../election-schedule-position/election-schedule-position.interface";

export interface ElectionScheduleInterface extends BaseEntityInterface {
    date: Date;
    type: string;
    remarks: string;
    eletive_positions?: ElectionSchedulePositionInterface[];
}