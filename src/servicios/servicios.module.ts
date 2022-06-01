import { Servicios } from './../models/entities/Servicios.entity';
import { Module } from '@nestjs/common';
import { ServiciosService } from './servicios.service';
import { ServiciosController } from './servicios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Servicios])],
  controllers: [ServiciosController],
  providers: [ServiciosService]
})
export class ServiciosModule {}
