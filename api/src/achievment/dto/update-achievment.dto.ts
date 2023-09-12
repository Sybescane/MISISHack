import { PartialType } from '@nestjs/swagger';
import { CreateAchievmentDto } from './create-achievment.dto';

export class UpdateAchievmentDto extends PartialType(CreateAchievmentDto) {}
