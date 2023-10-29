import dotenv from "dotenv";
dotenv.config();
export const DatabaseConfig = {
  type: (process.env.DATABASE_TYPE ?? "mysql") as any,
  host: process.env.DATABASE_HOST ?? "localhost",
  port: (process.env.DATABASE_PORT ?? 3306) as number,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
};
