
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module'
import { join } from 'path';
import { ProfesionalesModule } from './profesionales/profesionales.module';
import { SubserviciosModule } from './subservicios/subservicios.module';
import { ServiciosModule } from './servicios/servicios.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mssql',
    host: '127.0.0.1',
    port: 1433,
    username: 'sa',
    password: 'sa',
    database: 'DaVinci',
    logging: true,
    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    synchronize: false,
    options: { encrypt: false },
  }), UsuariosModule, ProfesionalesModule, SubserviciosModule, ServiciosModule],
  controllers: [AppController],
  providers: [AppService,
   /*  {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    }, */],
})
export class AppModule {}
