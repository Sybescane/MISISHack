import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Team } from "./entities/team.entity"
import { In, Repository } from "typeorm"
import { CreateTeamDto } from "./dto/create-team.dto"
import { User } from "../user/entities/user.entity"
import { Specialization } from "../specialization/entities/specialization.entity"
import { AddUserInTeam } from "./dto/adduserteam.dto"

@Injectable()
export class TeamService {
  constructor(@InjectRepository(Team) private readonly teamRepository: Repository<Team>,
  @InjectRepository(User) private readonly userRepository: Repository<User>,
  @InjectRepository(Specialization) private readonly specRepository: Repository<Specialization>){}
  async create(dto: CreateTeamDto) {
    const team = this.teamRepository.create()
    team.captain = await this.userRepository.findOneBy({userId: dto.captainId})
    team.description = dto.description
    team.isOpened = dto.isOpened
    team.specializations = await this.specRepository.find({
        where: {
            specializationId: In(dto.specializations)
        }
    })
    team.name = dto.name
    await this.teamRepository.save(team)
    return team
  }

  async addUserInTeam(dto: AddUserInTeam){
    const user = await this.userRepository.findOneBy({userId: dto.userId})
    const team = await this.teamRepository.findOne({
      where: {
        teamId: dto.teamId
      },
      relations: {
        users: true
      }})
    team.users.push(user)
    await this.teamRepository.save(team)
  }
}