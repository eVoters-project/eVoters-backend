import { PartialType } from "@nestjs/swagger";
import { CreateVoterLeaderDto } from "./create-voter-leader.dto";

export class UpdateVoterLeaderDto extends PartialType(CreateVoterLeaderDto) { }