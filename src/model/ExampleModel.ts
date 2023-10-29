import { Column, Entity, PrimaryColumn, VersionColumn } from "typeorm";

@Entity("ExampleModel")
export class ExampleModel {
  @PrimaryColumn()
  id!: string;

  @VersionColumn()
  version!: number;

  @Column("varchar", { nullable: false, length: 120 })
  userId!: string;

  @Column("varchar", { length: 100 })
  name!: string;

  @Column("varchar", { length: 100 })
  companyName!: string;

  @Column("varchar", { length: 100 })
  email!: string;

  @Column("varchar", { length: 100 })
  phoneNumber!: string;
}
