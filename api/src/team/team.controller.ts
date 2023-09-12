import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UpdateUserDto } from '../user/dto/update-user.dto';
import { CreateTeamDto } from './dto/create-team.dto';
import { TeamService } from './team.service';
import { AddUserInTeam } from './dto/adduserteam.dto';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post('create-team')
  create(@Body() dto: CreateTeamDto) {
    return this.teamService.create(dto);
  }

  @Post('adduserinteam')
  addUserInTeam(@Body() dto: AddUserInTeam){
    return this.teamService.addUserInTeam(dto)
  }

//   @Get()
//   findAll() {
//     return this.teamService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.teamService.findOneById(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
//     return this.teamService.update(+id, updateUserDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.teamService.remove(+id);
//   }
}
