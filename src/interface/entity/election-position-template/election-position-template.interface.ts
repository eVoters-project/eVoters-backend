import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";
import { PositionInterface } from "../position/position.interface";

export interface ElectionPositionTemplateInterface extends BaseEntityInterface {
    sequence: number;
    election_cycle: string;
    remarks: string;
}