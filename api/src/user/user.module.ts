import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Team } from '../team/entities/team.entity';
import { TeamService } from '../team/team.service';
import { Specialization } from '../specialization/entities/specialization.entity';
import { TeamController } from '../team/team.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, Team, Specialization])],
  controllers: [UserController, TeamController, ],
  providers: [UserService, TeamService],
  exports: [UserService]
})
export class UserModule {}
