import { Subservicios } from './../models/entities/Subservicios.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSubservicioDto } from './dto/create-subservicio.dto';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class SubserviciosService {
  constructor(
    @InjectRepository(Subservicios)
    public readonly subserviciosRepository: Repository<Subservicios>,
  ) {}

  async create(createSubservicioDto: CreateSubservicioDto) : Promise<Subservicios>{
    return this.subserviciosRepository.save(createSubservicioDto);
  }

  async findAll() : Promise<Subservicios[]>{
    return this.subserviciosRepository.find();
  }

  async findOne(id: number) : Promise<Subservicios>{
    return this.subserviciosRepository.findOne(id);
  }

  async update(updateSubservicioDto: CreateSubservicioDto) : Promise<Subservicios>{
    return this.subserviciosRepository.save(updateSubservicioDto);
  }

  async remove(id: number): Promise<Subservicios> {
    const entity = await this.findOne(id)
    return this.subserviciosRepository.remove(entity);
  }

  async bulkRemove(ids: number []): Promise<Subservicios[]> {
    const entities = await this.subserviciosRepository.findByIds(ids)
    return this.subserviciosRepository.remove(entities);
  }
}
