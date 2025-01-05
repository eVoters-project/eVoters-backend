import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";
import { PositionInterface } from "../position/position.interface";
import { ElectionScheduleInterface } from "../election-schedule/election-schedule.interface";

export interface ElectionPositionInterface extends BaseEntityInterface {
    sequence: number;
    seat: number;
    remarks: string;
    position: PositionInterface;
    election_schedule: ElectionScheduleInterface;
}