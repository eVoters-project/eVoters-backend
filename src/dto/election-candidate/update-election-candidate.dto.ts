import { PartialType } from "@nestjs/swagger";
import { CreateElectionCandidateDto } from "./create-election-candidate.dto";

export class UpdateElectionCandidateDto extends PartialType(CreateElectionCandidateDto) { }