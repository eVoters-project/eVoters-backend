import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";
import { LeaderInterface } from "../leader/leader.entity.interface";

export interface PartyInterface extends BaseEntityInterface {
    code: string;
    name: string;
    description: string;
    remarks: string;
    leader: LeaderInterface;
    status: string;
}