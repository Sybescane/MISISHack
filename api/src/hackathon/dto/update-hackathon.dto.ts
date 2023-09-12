import { PartialType } from '@nestjs/swagger';
import { CreateHackDto } from './create-hack.dto';

export class UpdateHackathonDto extends PartialType(CreateHackDto) {}
