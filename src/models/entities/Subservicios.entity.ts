import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Servicios } from "./Servicios.entity";

@Index("PK__subservi__6131A9DE915D3EB1", ["idSubservicio"], { unique: true })
@Index("uniqueNombreSubServicios", ["nombre"], { unique: true })
@Entity("subservicios", { schema: "dbo" })
export class Subservicios {
  @PrimaryGeneratedColumn({ type: "int", name: "id_subservicio" })
  idSubservicio: number;

  @Column("varchar", { name: "nombre", unique: true, length: 140 })
  nombre: string;

  @ManyToOne(() => Servicios, (servicios) => servicios.subservicios, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "id_servicio", referencedColumnName: "idServicio" }])
  idServicio: Servicios;
}
