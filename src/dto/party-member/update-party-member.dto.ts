import { PartialType } from "@nestjs/swagger";
import { CreatePartyMemberDto } from "./create-party-member.dto";

export class UpdatePartyMemberDto extends PartialType(CreatePartyMemberDto) { }