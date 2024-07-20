import { PartialType } from "@nestjs/swagger";
import { CreateVoterInfluenceDto } from "./create-voter-influence.dto";

export class UpdateVoterInfluenceDto extends PartialType(CreateVoterInfluenceDto) { }