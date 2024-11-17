import { PartialType } from "@nestjs/swagger";
import { CreateElectionPrecinctDto } from "./create-election-precinct.dto";

export class UpdateElectionPrecinctDto extends PartialType(CreateElectionPrecinctDto) { }