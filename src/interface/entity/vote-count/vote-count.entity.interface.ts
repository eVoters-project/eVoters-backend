import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";
import { AreaBarangayInterface } from "../area-barangay/area-barangay.interface";
import { AreaPurokInterface } from "../area-purok/area-purok.interface";
import { ElectionScheduleInterface } from "../election-schedule/election-schedule.interface";

export interface VoteCountEntityInterface extends BaseEntityInterface {
    area_barangay: AreaBarangayInterface;
    area_purok: AreaPurokInterface;
    election_schedule: ElectionScheduleInterface;
}