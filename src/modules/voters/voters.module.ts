import { Module } from "@nestjs/common";
import { VotersService } from "./voters.service";
import { VotersController } from "./voters.controller";

@Module({
    imports: [],
    controllers: [VotersController],
    providers: [VotersService]
})
export class VotersModule {}