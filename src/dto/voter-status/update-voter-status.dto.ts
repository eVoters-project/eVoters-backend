import { PartialType } from "@nestjs/swagger";
import { CreateVoterStatusDto } from "./create-voter-status.dto";

export class UpdateVoterStatusDto extends PartialType(CreateVoterStatusDto) { }