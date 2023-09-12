import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { In, Repository } from 'typeorm';
import { hash } from 'argon2';
import { Specialization } from 'src/specialization/entities/specialization.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>,
  @InjectRepository(Specialization) private readonly specRepository: Repository<Specialization>){}
  async create(dto: CreateUserDto) {
    const oldUser = await this.findOneByEmail(dto.email)
    if(oldUser){
      throw new BadRequestException('такой пользователь уже существует')
    }
    const user = this.userRepository.create()
    user.email = dto.email
    user.fullname = dto.fullname
    user.nickname = dto.nickname
    user.about = dto.about
    user.tgContact = dto.tgContact
    user.password = await hash(dto.password)
    user.specializations = await this.specRepository.find({
      where: {
        specializationId: In(dto.specialization)
      }
    })
    await this.save(user)
    return user
  }

  async findAll() {
    const users = await this.userRepository.find({
      relations: {
        specializations: true
      }
    });
    const result = users.map(item => ({
      fullname: item.fullname,
      nickname: item.nickname,
      specializations: item.specializations,
      about: item.about
    }));
    return result;
  }

  async findOneById(id: number){
    const user = await this.userRepository.findOne({
      where: {
        userId: id
      },
      relations: {
        teams: true
      }
    })
    if(!user){
      throw new NotFoundException('User not found')
    }
    const {password, teams, ...result} = user
    return result
  }

  async profile(id: number){
    const user = await this.userRepository.findOne({
      where: {
        userId: id
      },
      relations: {
        teams: true
      }
    })
    if(!user){
      throw new NotFoundException('User not found')
    }
    const {password, ...result} = user
    return result
  }

  async findOneByEmail(email: string) {
    const user = await this.userRepository.findOneBy({email})
    return user
  }

  async update(id: number, dto: UpdateUserDto) {
    const user = await this.userRepository.findOneBy({userId: id})
    user.email = dto.email
    user.fullname = dto.nickname
    user.nickname = dto.nickname
    user.password = await hash(dto.password)
    user.about = dto.about
    user.tgContact = dto.tgContact
    user.specializations = await this.specRepository.find({
      where: {
        specializationId: In(dto.specialization)
      }
    })

    await this.save(user)
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async save(user:User){
    await this.userRepository.save(user)
  }
}
