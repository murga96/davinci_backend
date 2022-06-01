import { Subservicios } from './..//models/entities/Subservicios.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SubserviciosService } from './subservicios.service';
import { SubserviciosController } from './subservicios.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Subservicios])],
  controllers: [SubserviciosController],
  providers: [SubserviciosService]
})
export class SubserviciosModule {}
