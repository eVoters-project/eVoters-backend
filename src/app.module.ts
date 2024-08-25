import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { LoggingMiddleware } from './middleware';

import { AuthModule } from './modules/auth';
import { AreaBarangayModule, AreaLGUModule, AreaProvinceModule, AreaRegionModule, GroupTypeModule, PositionModule, UserModule, VoterBaseModule, VoterInfluenceModule, VoterInfluenceSubModule, VoterLeaderModule, VoterLeaderSubModule } from './modules/settings';

import { DashboardModule } from './modules/dashboard';
import { CampaignModule } from './modules/campaign';
import { StrawVoteModule } from './modules/straw-vote';
import { LeaderModule } from './modules/leader';
import { PartyModule } from './modules/party';
import { VotersModule } from './modules/voters';
import { VoteCountModule } from './modules/vote-count';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseTransFormInterceptor } from './interceptors';
import { VoterPositionModule } from './modules/settings/voter-position/voter-position.module';
import { VoterStatusModule } from './modules/settings/voter-status/voter-status.module';
import { VoterTypeModule } from './modules/settings/voter-type/voter-type.module';
import { AreaPurokModule } from './modules/settings/area-purok/area-purok.module';
import { ElectionScheduleModule } from './modules/settings/election-schedule/election-schedule.module';

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
    PositionModule,
    VoterBaseModule,
    VoterInfluenceModule,
    VoterInfluenceSubModule,
    VoterPositionModule,
    VoterStatusModule,
    VoterTypeModule,
    VoterLeaderModule,
    VoterLeaderSubModule,
    AreaPurokModule,
    AreaBarangayModule,
    AreaLGUModule,
    AreaProvinceModule,
    AreaRegionModule,
    ElectionScheduleModule
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
