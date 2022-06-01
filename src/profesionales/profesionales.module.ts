import { Profesionales } from './../models/entities/Profesionales.entity';
import { Module } from '@nestjs/common';
import { ProfesionalesService } from './profesionales.service';
import { ProfesionalesController } from './profesionales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Profesionales])],
  controllers: [ProfesionalesController],
  providers: [ProfesionalesService],
  exports: [ProfesionalesService]
})
export class ProfesionalesModule {}
