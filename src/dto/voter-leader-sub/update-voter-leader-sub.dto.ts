import { PartialType } from "@nestjs/swagger";
import { CreateVoterLeaderDto } from "../voter-leader/create-voter-leader.dto";

export class UpdateVoterLeaderSubDto extends PartialType(CreateVoterLeaderDto) { }