import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK__profesio__F6DC93F202398A35", ["idProfesional"], { unique: true })
@Index("uniqueNombre_Profesional", ["nombre"], { unique: true })
@Entity("profesionales", { schema: "dbo" })
export class Profesionales {
  @PrimaryGeneratedColumn({ type: "int", name: "id_profesional" })
  idProfesional: number;

  @Column("varchar", { name: "nombre", unique: true, length: 140 })
  nombre: string;

  @Column("varbinary", { name: "imagen", nullable: true })
  imagen: Buffer | null;

  @Column("varchar", { name: "descripcion", length: 140 })
  descripcion: string;

  @Column("varchar", { name: "correo", length: 140 })
  correo: string;

  @Column("varchar", { name: "cargo", nullable: true, length: 140 })
  cargo: string | null;
}
