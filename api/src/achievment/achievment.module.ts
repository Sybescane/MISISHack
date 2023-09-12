import { Module } from '@nestjs/common';
import { AchievmentService } from './achievment.service';
import { AchievmentController } from './achievment.controller';

@Module({
  controllers: [AchievmentController],
  providers: [AchievmentService]
})
export class AchievmentModule {}
