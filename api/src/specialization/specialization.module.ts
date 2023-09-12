import { Module } from '@nestjs/common';
import { SpecService } from './specialization.service';
import { SpecializationController } from './specialization.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Specialization } from './entities/specialization.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Specialization])],
  controllers: [SpecializationController],
  providers: [SpecService]
})
export class SpecializationModule {}
