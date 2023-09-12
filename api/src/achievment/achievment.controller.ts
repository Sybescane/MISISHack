import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AchievmentService } from './achievment.service';
import { CreateAchievmentDto } from './dto/create-achievment.dto';
import { UpdateAchievmentDto } from './dto/update-achievment.dto';

@Controller('achievment')
export class AchievmentController {
  constructor(private readonly achievmentService: AchievmentService) {}

  @Post()
  create(@Body() createAchievmentDto: CreateAchievmentDto) {
    return this.achievmentService.create(createAchievmentDto);
  }

  @Get()
  findAll() {
    return this.achievmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.achievmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAchievmentDto: UpdateAchievmentDto) {
    return this.achievmentService.update(+id, updateAchievmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.achievmentService.remove(+id);
  }
}
