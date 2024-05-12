import { Module } from "@nestjs/common";
import { LeaderController } from "./leader.controller";
import { LeaderService } from "./leader.service";

@Module({
    imports: [],
    controllers: [LeaderController],
    providers: [LeaderService]
})
export class LeaderModule {}