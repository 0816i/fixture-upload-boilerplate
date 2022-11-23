import dotenv from "dotenv";
import { Service } from "src/service/Service";

dotenv.config();

async function main() {
  const myService = new Service();
  await myService.start();
}

main();
