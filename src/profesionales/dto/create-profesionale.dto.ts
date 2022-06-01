export class CreateProfesionaleDto {

  idProfesional: number | null;

  nombre: string;

  imagen: Buffer | null;

  descripcion: string;

  correo: string;

  cargo: string | null;
}
