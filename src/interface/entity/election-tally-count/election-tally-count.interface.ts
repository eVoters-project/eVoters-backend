import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";
import { ElectionTallyInterface } from "../election-tally/election-tally.interface";

export interface ElectionTallyCountInterface extends BaseEntityInterface {
    election_tally: ElectionTallyInterface;
}