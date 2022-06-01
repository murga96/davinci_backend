import { Servicios } from "./../../models/entities/Servicios.entity";

export class CreateSubservicioDto {
  idSubservicio: number | null;

  nombre: string;

  idServicio: Servicios | null;
}
