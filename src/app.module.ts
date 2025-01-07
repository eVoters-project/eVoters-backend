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
import { ElectionPositionModule } from './modules/settings/election-position/election-position.module';
import { ElectionPrecinctModule } from './modules/settings/election-precinct/election-precinct.module';
import { ElectionCandidateModule } from './modules/settings/election-candidate/election-candidate.module';
import { ElectionTallyModule } from './modules/election-tally/election-tally.module';
import { PartyMemberModule } from './modules/party-member/party-member.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MySQLConfigAsync } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env']
    }),
    TypeOrmModule.forRootAsync(MySQLConfigAsync),
    AuthModule,
    DashboardModule,
    CampaignModule,
    LeaderModule,
    PartyModule,
    PartyMemberModule,
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
    ElectionScheduleModule,
    ElectionPositionModule,
    ElectionPrecinctModule,
    ElectionCandidateModule,
    ElectionTallyModule,

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
