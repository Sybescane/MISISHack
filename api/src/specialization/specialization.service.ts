import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { Specialization } from "./entities/specialization.entity"

@Injectable()
export class SpecService {
  constructor(@InjectRepository(Specialization) private readonly specRepository: Repository<Specialization>,){}
  
  async findAll(){
    return await this.specRepository.find()
  }
}