import dotenv from "dotenv";
import { MysqlClient } from "src/core/Typeorm";
import { Service } from "src/service/Service";

async function main() {
  console.log(process.env.DATABASE_PORT);
  await MysqlClient.initialize();
  const myService = new Service();
  await myService.start();
}
dotenv.config();
main();
