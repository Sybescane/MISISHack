import { Injectable } from '@nestjs/common';
import { CreateAchievmentDto } from './dto/create-achievment.dto';
import { UpdateAchievmentDto } from './dto/update-achievment.dto';

@Injectable()
export class AchievmentService {
  create(createAchievmentDto: CreateAchievmentDto) {
    return 'This action adds a new achievment';
  }

  findAll() {
    return `This action returns all achievment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} achievment`;
  }

  update(id: number, updateAchievmentDto: UpdateAchievmentDto) {
    return `This action updates a #${id} achievment`;
  }

  remove(id: number) {
    return `This action removes a #${id} achievment`;
  }
}
