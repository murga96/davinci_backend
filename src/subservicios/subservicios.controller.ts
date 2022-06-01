import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { SubserviciosService } from './subservicios.service';
import { CreateSubservicioDto } from './dto/create-subservicio.dto';

@Controller('subservicios')
export class SubserviciosController {
  constructor(private readonly subserviciosService: SubserviciosService) {}

  @Post()
  create(@Body() createSubservicioDto: CreateSubservicioDto) {
    // throw new HttpException("Este es un error", HttpStatus.INTERNAL_SERVER_ERROR)
    return this.subserviciosService
      .create(createSubservicioDto)
  }

  @Get()
  findAll() {
    return this.subserviciosService
      .findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subserviciosService
      .findOne(+id);
  }

  @Patch()
  update(@Body() updateSubservicioDto: CreateSubservicioDto) {
    return this.subserviciosService
      .update(updateSubservicioDto);
  }

  @Delete()
  bulk(@Body() ids: number[]) {
    console.log(ids)
    return this.subserviciosService
      .bulkRemove(ids);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subserviciosService
      .remove(+id);
  }
}
