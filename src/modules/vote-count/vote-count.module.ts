import { Module } from "@nestjs/common";
import { VoteCountService } from "./vote-count.service";
import { VoteCountController } from "./vote-count.controller";

@Module({
    imports: [],
    controllers: [VoteCountController],
    providers: [VoteCountService]
})
export class VoteCountModule {}