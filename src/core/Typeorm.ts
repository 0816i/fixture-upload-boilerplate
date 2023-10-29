import { DatabaseConfig } from "src/config/Database";
import { ExampleModel } from "src/model/ExampleModel";
import { DataSource } from "typeorm";

export const MysqlClient = new DataSource({
  type: DatabaseConfig.type,
  host: DatabaseConfig.host,
  port: DatabaseConfig.port,
  username: DatabaseConfig.username,
  password: DatabaseConfig.password,
  database: DatabaseConfig.database,
  synchronize: false,
  logging: false,
  entities: [ExampleModel],
});
