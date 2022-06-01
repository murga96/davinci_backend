import { Servicios } from './../models/entities/Servicios.entity';
import { Injectable } from '@nestjs/common';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ServiciosService {
  constructor(
    @InjectRepository(Servicios)
    public readonly serviciosRepository: Repository<Servicios>,
  ) {}
  async create(createServicioDto: CreateServicioDto): Promise<Servicios> {
    return this.serviciosRepository.save(createServicioDto);
  }

  async findAll(): Promise<Servicios[]> {
    return this.serviciosRepository.find({relations: ["subservicios"]});
  }

 async findOne(id: number): Promise<Servicios> {
    return this.serviciosRepository.findOne(id, {relations: ["subservicios"]});
  }

  async update(updateServicioDto: CreateServicioDto): Promise<Servicios> {
    return this.serviciosRepository.save(updateServicioDto);
  }

  async remove(id: number) : Promise<Servicios>{
    const entity = await this.findOne(id)
    return this.serviciosRepository.remove(entity);
  }
}
