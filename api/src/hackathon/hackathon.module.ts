import { Module } from '@nestjs/common';
import { HackathonService } from './hackathon.service';
import { HackathonController } from './hackathon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hackathon } from './entities/hackathon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hackathon])],
  controllers: [HackathonController],
  providers: [HackathonService],
  exports: [HackathonService]
})
export class HackathonModule {}
