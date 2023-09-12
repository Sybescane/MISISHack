import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import config from '../configurations/env.config';
import { MailModule } from './mail/mail.module';
import { getTypeormConfig } from 'configurations/typeorm-module.config';
import { AppController } from './app.controller';
import { JwtService } from '@nestjs/jwt';
import { UserModule } from './user/user.module';
import { HackathonModule } from './hackathon/hackathon.module';
import { SpecializationModule } from './specialization/specialization.module';
import { TeamModule } from './team/team.module';
import { AchievmentModule } from './achievment/achievment.module';
import { PostModule } from './post/post.module';
import { ActivityModule } from './activity/activity.module';

@Module({
  imports: [TypeOrmModule.forRootAsync(getTypeormConfig()),
  ConfigModule.forRoot({isGlobal: true, load: [config]}),
  AuthModule,
  MailModule,
  UserModule,
  HackathonModule,
  SpecializationModule,
  TeamModule,
  AchievmentModule,
  PostModule,
  ActivityModule,],
  controllers: [AppController],
  providers: [JwtService],
})
export class AppModule {}