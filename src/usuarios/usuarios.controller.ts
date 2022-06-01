import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { ChangePasswordDTO } from './dto/update-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto).catch((error) => error?.originalError?.message);
  }

  @Get()
  findAll() {
    return this.usuariosService.findAll().catch((error) => error?.originalError?.message);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(+id).catch((error) => error?.originalError?.message);
  }

  @Patch()
  update(@Body() updateUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.update(updateUsuarioDto).catch((error) => error?.originalError?.message);
  }

  @Patch('cambiarContrasenna')
  changepassword(@Body() changePasswordDTO: ChangePasswordDTO) {
    return this.usuariosService.modificarContrasena(changePasswordDTO).catch((error) => error);
  }

  @Patch(":id")
  forcePassword(@Param("id") id:number) {
    return this.usuariosService.forcePassword(id).catch((error) => error.message);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id).catch((error) => error?.originalError?.message);
  }
}
