import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Subservicios } from "./Subservicios.entity";

@Index("PK__servicio__6FD07FDCDD258412", ["idServicio"], { unique: true })
@Index("uniqueNombreServicios", ["nombre"], { unique: true })
@Entity("servicios", { schema: "dbo" })
export class Servicios {
  @PrimaryGeneratedColumn({ type: "int", name: "id_servicio" })
  idServicio: number;

  @Column("varchar", { name: "imagen", nullable: true, length: 140 })
  imagen: string | null;

  @Column("varchar", { name: "descripcion_breve", length: 140 })
  descripcionBreve: string;

  @Column("varchar", { name: "descripcion", length: 140 })
  descripcion: string;

  @Column("varchar", { name: "nombre", unique: true, length: 140 })
  nombre: string;

  @OneToMany(() => Subservicios, (subservicios) => subservicios.idServicio)
  subservicios: Subservicios[];
}
