import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PartyMemberEntity } from "src/entity/party-member/party-member.entity";
import { PartyMemberController } from "./party-member.controller";
import { PartyMemberService } from "./party-member.service";

@Module({
    imports: [TypeOrmModule.forFeature([PartyMemberEntity])],
    controllers: [PartyMemberController],
    providers: [PartyMemberService]
})
export class PartyMemberModule { }