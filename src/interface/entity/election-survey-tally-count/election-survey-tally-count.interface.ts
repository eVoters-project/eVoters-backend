import { BaseEntityInterface } from "src/interface/abstract/entity/base.entity.interface";
import { ElectionSurveyTallyInterface } from "../election-survey-tally/election-survey-tally.interface";

export interface ElectionSurveyTallyCountInterface extends BaseEntityInterface {
    election_survey_tally: ElectionSurveyTallyInterface;
}