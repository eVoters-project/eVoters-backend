import { PartialType } from "@nestjs/swagger";
import { CreateElectionPositionDto } from "./create-election-position.dto";

export class UpdateElectionPositionDto extends PartialType(CreateElectionPositionDto) { }