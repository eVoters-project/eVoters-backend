import { PartialType } from "@nestjs/swagger";
import { CreateVoterInfluenceSubDto } from "./create-voter-influence-sub.dto";

export class UpdateVoterInfluenceSubDto extends PartialType(CreateVoterInfluenceSubDto) { }