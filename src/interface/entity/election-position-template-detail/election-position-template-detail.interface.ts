import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";
import { ElectionPositionTemplateInterface } from "../election-position-template/election-position-template.interface";
import { PositionInterface } from "../position/position.interface";

export interface ElectionPositionTemplateDetailInterface extends BaseEntityInterface {
    sequence: number;
    position: PositionInterface;
    seat: number;
    remarks: string;
    election_position_template: ElectionPositionTemplateInterface;
}