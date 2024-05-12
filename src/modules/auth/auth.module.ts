import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { MySQLConfigAsync } from "src/config";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ['.env']
        }),
        TypeOrmModule.forRootAsync(MySQLConfigAsync)
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}