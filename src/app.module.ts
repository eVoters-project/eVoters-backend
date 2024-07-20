import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { LoggingMiddleware } from './middleware';

import { AuthModule } from './modules/auth';
import { GroupTypeModule, UserModule, VoterBaseModule, VoterInfluenceModule, VoterInfluenceSubModule } from './modules/settings';

import { DashboardModule } from './modules/dashboard';
import { CampaignModule } from './modules/campaign';
import { StrawVoteModule } from './modules/straw-vote';
import { LeaderModule } from './modules/leader';
import { PartyModule } from './modules/party';
import { VotersModule } from './modules/voters';
import { VoteCountModule } from './modules/vote-count';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseTransFormInterceptor } from './interceptors';

@Module({
  imports: [
    AuthModule,
    DashboardModule,
    CampaignModule,
    LeaderModule,
    PartyModule,
    VoteCountModule,
    StrawVoteModule,
    VotersModule,
    UserModule,
    GroupTypeModule,
    VoterBaseModule,
    VoterInfluenceModule,
    VoterInfluenceSubModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseTransFormInterceptor
    }
  ],
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }

}
