import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './entities/team.entity';
import { User } from 'src/user/entities/user.entity';
import { Specialization } from 'src/specialization/entities/specialization.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Team, Specialization])],
  controllers: [TeamController],
  providers: [TeamService]
})
export class TeamModule {}
