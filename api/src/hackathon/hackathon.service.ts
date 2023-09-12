import { Injectable } from '@nestjs/common';
import { UpdateHackathonDto } from './dto/update-hackathon.dto';
import { CreateHackDto } from './dto/create-hack.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Hackathon } from './entities/hackathon.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HackathonService {
  constructor(@InjectRepository(Hackathon) private readonly hackRepository: Repository<Hackathon>){}
  create(createHackathonDto: CreateHackDto) {
    return 'This action adds a new hackathon';
  }

  async findAll() {
    return await this.hackRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} hackathon`;
  }

  update(id: number, updateHackathonDto: UpdateHackathonDto) {
    return `This action updates a #${id} hackathon`;
  }

  remove(id: number) {
    return `This action removes a #${id} hackathon`;
  }
}
