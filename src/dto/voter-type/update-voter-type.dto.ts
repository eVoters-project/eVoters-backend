import { PartialType } from "@nestjs/swagger";
import { CreateVoterTypeDto } from "./create-voter-type.dto";

export class UpdateVoterTypeDto extends PartialType(CreateVoterTypeDto) { }