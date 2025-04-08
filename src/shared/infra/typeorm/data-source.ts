import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "1234",
  database: "rentx",
  synchronize: false,
  logging: false,
  entities: ["./src/modules/**/entities/*.ts"],
  migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
});
