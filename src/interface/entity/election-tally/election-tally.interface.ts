import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";
import { ElectionCandidateInterface } from "../election-candidate/election-candidate.interface";
import { ElectionPrecinctInterface } from "../election-precinct/election-precinct.interface";

export interface ElectionTallyInterface extends BaseEntityInterface {
    date: Date;
    candidate: ElectionCandidateInterface;
    precinct: ElectionPrecinctInterface;
    type: string;
    count: number;
}