import { PartialType } from "@nestjs/swagger";
import { CreateElectionTallyDto } from "./create-election-tally.dto";

export class UpdateElectionTallyDto extends PartialType(CreateElectionTallyDto) { }