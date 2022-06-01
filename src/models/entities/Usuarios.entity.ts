import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK__usuarios__4E3E04AD465BF711", ["idUsuario"], { unique: true })
@Index("UQ__usuarios__F3DBC572AF264AB1", ["username"], { unique: true })
@Entity("usuarios", { schema: "dbo" })
export class Usuarios {
  @PrimaryGeneratedColumn({ type: "int", name: "id_usuario" })
  idUsuario: number;

  @Column("varchar", { name: "username", unique: true, length: 140 })
  username: string;

  @Column("varchar", { name: "password", length: 140 })
  password: string;
}
