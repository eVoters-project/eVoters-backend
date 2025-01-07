import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";
import { ElectionCandidateInterface } from "../election-candidate/election-candidate.interface";
import { ElectionPrecinctInterface } from "../election-precinct/election-precinct.interface";
import { ElectionPositionInterface } from "../election-position/election-position.interface";

export interface ElectionTallyInterface extends BaseEntityInterface {
    date: Date;
    position: ElectionPositionInterface;
    candidate: ElectionCandidateInterface;
    precinct: ElectionPrecinctInterface;
    type: string;
    count: number;
}