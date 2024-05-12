import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";

class MySQLConfig {

    static TypeOrmConfig(config: ConfigService): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: config.get<string>('DB_HOST'),
            port: config.get<number>('DB_PORT'),
            username: config.get<string>('DB_USER'),
            password: config.get<string>('DB_PASSWORD'),
            database: config.get<string>('DB_DATABASE'),
            timezone: '+08:00',
            entities: ['dist/**/*.entity{.ts,.js}'],
            synchronize: config.get<boolean>('DB_SYNC') ?? false,
            autoLoadEntities: true
        }
    }

}

export const MySQLConfigAsync: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (config: ConfigService) => {
        return MySQLConfig.TypeOrmConfig(config);
    }
};

