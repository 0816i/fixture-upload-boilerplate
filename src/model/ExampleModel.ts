import { Entity, PrimaryColumn, VersionColumn } from "typeorm";

@Entity("ExampleModel")
export class ExampleModel {
  @PrimaryColumn()
  id!: string;

  @VersionColumn()
  version!: number;
}
