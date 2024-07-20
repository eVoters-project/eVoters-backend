import { PartialType } from "@nestjs/swagger";
import { CreateVoterBaseDto } from "./create-voter-base.dto";

export class UpdateVoterBaseDto extends PartialType(CreateVoterBaseDto) { }