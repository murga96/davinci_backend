import { Profesionales } from '../models/entities/Profesionales.entity';
import { Injectable } from '@nestjs/common';
import { CreateProfesionaleDto } from './dto/create-profesionale.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProfesionalesService {
  constructor(
    @InjectRepository(Profesionales)
    public readonly profesionalesRepository: Repository<Profesionales>,
  ) {}

  async create(createProfesionaleDto: CreateProfesionaleDto): Promise<Profesionales> {
    return this.profesionalesRepository.save(createProfesionaleDto);
  }

  async findAll() : Promise<Profesionales[]>{
    return this.profesionalesRepository.find();
  }

  async findOne(id: number): Promise<Profesionales> {
    return this.profesionalesRepository.findOne(id);
  }

 async update( updateProfesionaleDto: CreateProfesionaleDto): Promise<Profesionales> {
    return this.profesionalesRepository.save(updateProfesionaleDto);
  }

  async remove(id: number): Promise<Profesionales> {
    const entity = await this.findOne(id);
    return this.profesionalesRepository.remove(entity);
  }
}
