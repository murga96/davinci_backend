import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfesionalesService } from './profesionales.service';
import { CreateProfesionaleDto } from './dto/create-profesionale.dto';

@Controller('profesionales')
export class ProfesionalesController {
  constructor(private readonly profesionalesService: ProfesionalesService) {}

  @Post()
  create(@Body() createProfesionaleDto: CreateProfesionaleDto) {
    return this.profesionalesService.create(createProfesionaleDto).catch((error) => error?.originalError?.message);
  }

  @Get()
  findAll() {
    return this.profesionalesService.findAll().catch((error) => error?.originalError?.message);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profesionalesService.findOne(+id).catch((error) => error?.originalError?.message);
  }

  @Patch()
  update(@Body() updateProfesionaleDto: CreateProfesionaleDto) {
    return this.profesionalesService.update( updateProfesionaleDto).catch((error) => error?.originalError?.message);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profesionalesService.remove(+id).catch((error) => error?.originalError?.message);
  }
}
