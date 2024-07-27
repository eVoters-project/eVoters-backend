import { ApiProperty } from "@nestjs/swagger";
import { IsObject, IsString } from "class-validator";
import { LeaderInterface, VoterInterface, VoterLeaderInterface } from "src/interface";

export class CreateLeaderDto implements LeaderInterface {
    @ApiProperty({ default: { id: '' } })
    @IsObject()
    voter: VoterInterface;

    @ApiProperty({ default: { id: '' } })
    @IsObject()
    voter_leader: VoterLeaderInterface;

    @ApiProperty({ default: 'status' })
    @IsString()
    status: string;
}