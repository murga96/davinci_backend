import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServiciosService } from './servicios.service';
import { CreateServicioDto } from './dto/create-servicio.dto';

@Controller('servicios')
export class ServiciosController {
  constructor(private readonly serviciosService: ServiciosService) {}

  @Post()
  create(@Body() createServicioDto: CreateServicioDto) {
    return this.serviciosService.create(createServicioDto).catch((error) => error?.originalError?.message);
  }

  @Get()
  findAll() {
    return this.serviciosService.findAll().catch((error) => error?.originalError?.message);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviciosService.findOne(+id).catch((error) => error?.originalError?.message);
  }

  @Patch()
  update( @Body() updateServicioDto: CreateServicioDto) {
    return this.serviciosService.update(updateServicioDto).catch((error) => error?.originalError?.message);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviciosService.remove(+id).catch((error) => error?.originalError?.message);
  }
}
