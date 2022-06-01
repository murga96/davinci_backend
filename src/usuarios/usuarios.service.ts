import * as bcrypt from 'bcryptjs';
import { Usuarios } from '../models/entities/Usuarios.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Repository } from 'typeorm';
import { ChangePasswordDTO } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuarios)
    public readonly usuariosRepository: Repository<Usuarios>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuarios> {
    if (createUsuarioDto.password) {
      const encryptedPassw = await bcrypt.genSalt(12).then((salt) => {
        return bcrypt.hash(createUsuarioDto.password, salt);
      });
      createUsuarioDto.password = encryptedPassw.replace('$2a$12$', '');
    }else {
      const encryptedPassw = await bcrypt.genSalt(12).then((salt) => {
        return bcrypt.hash(createUsuarioDto.username + '*' + new Date().getFullYear(), salt);
      });
      createUsuarioDto.password = encryptedPassw.replace('$2a$12$', '');
      
    }
    return this.usuariosRepository.save(createUsuarioDto);
  }

  async findAll(): Promise<Usuarios[]> {
    return this.usuariosRepository.find();
  }

  async findOne(id: number) {
    return this.usuariosRepository.findOne(id);
  }

  async update(updateUsuarioDto: CreateUsuarioDto): Promise<Usuarios> {
    return this.usuariosRepository.save(updateUsuarioDto);
  }

  async remove(id: number): Promise<Usuarios> {
    const entity = await this.findOne(id);
    return this.usuariosRepository.remove(entity);
  }

  async forcePassword(id: number): Promise<Usuarios> {
    const usuario = await this.findOne(id);
    const encryptedPassw = await bcrypt.genSalt(12).then((salt) => {
      return bcrypt.hash(usuario.username + '*' + new Date().getFullYear(), salt);
    });
    usuario.password = encryptedPassw.replace('$2a$12$', '');
    return await this.update(usuario);
  }

  async modificarContrasena(
    changePasswordDTO: ChangePasswordDTO,
  ): Promise<Usuarios> {
    return new Promise<Usuarios>(async (resolve, reject) => {
      const usuario = await this.findOne(changePasswordDTO.idUsuario);
      console.log(changePasswordDTO.contrasenaVieja)
      console.log(/* '$2a$12$' + */ usuario.password)
      const validPassw = changePasswordDTO.contrasenaVieja === usuario.password;
      if (!validPassw) {
        reject('La contraseña actual es incorrecta');
      } else {
        const encryptedPassw = await bcrypt.genSalt(12).then((salt) => {
          return bcrypt.hash(changePasswordDTO.contrasenaNueva, salt);
        });
        usuario.password = encryptedPassw.replace('$2a$12$', '');
        resolve(this.update(usuario));
      }
    })
  }
}

