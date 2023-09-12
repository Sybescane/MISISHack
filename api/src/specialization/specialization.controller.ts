import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpecService } from './specialization.service';
import { CreateSpecializationDto } from './dto/create-specialization.dto';
import { UpdateSpecializationDto } from './dto/update-specialization.dto';

@Controller('spec')
export class SpecializationController {
  constructor(private readonly specService: SpecService) {}

  // @Post()
  // create(@Body() createSpecializationDto: CreateSpecializationDto) {
  //   return this.specializationService.create(createSpecializationDto);
  // }

  @Get('getAll')
  findAll() {
    return this.specService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.specializationService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSpecializationDto: UpdateSpecializationDto) {
  //   return this.specializationService.update(+id, updateSpecializationDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.specializationService.remove(+id);
  // }
}
