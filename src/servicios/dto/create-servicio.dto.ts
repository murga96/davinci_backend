import { Subservicios } from './../../models/entities/Subservicios.entity';

export class CreateServicioDto {
  idServicio: number | null;

  imagen: string | null;

  descripcionBreve: string;

  descripcion: string;

  nombre: string;

  subservicios: Subservicios[];
}
