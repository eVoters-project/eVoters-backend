import { ApiProperty } from "@nestjs/swagger";
import { VoterLeaderSubInterface } from "src/interface";

export class QueryVoterLeaderDto {
    @ApiProperty({ default: '', required: false })
    code?: string;

    @ApiProperty({ default: '', required: false })
    description?: string;

    @ApiProperty({ default: '', required: false })
    status?: string;

    @ApiProperty({ default: '', required: false })
    voter_leader_sub_id?: string;
}