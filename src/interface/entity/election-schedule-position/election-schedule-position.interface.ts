import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";
import { PositionInterface } from "../position/position.interface";
import { ElectionScheduleInterface } from "../election-schedule/election-schedule.interface";

export interface ElectionSchedulePositionInterface extends BaseEntityInterface {
    sequence: number;
    position: PositionInterface;
    quantity: number;
    remarks: string;
    election_schedule: ElectionScheduleInterface;
}