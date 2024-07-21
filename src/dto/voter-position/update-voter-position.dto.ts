import { PartialType } from "@nestjs/swagger";
import { CreateVoterPositionDto } from "./create-voter-position.dto";

export class UpdateVoterPositionDto extends PartialType(CreateVoterPositionDto) { }