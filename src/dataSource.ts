import "reflect-metadata";
import { DataSource } from "typeorm";
import { Producer } from "./entities/Producer";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "POSTGRESQL_USER",
    password: "POSTGRESQL_PASSWORD",
    database: "POSTGRESQL_DATABASE_NAME",
    synchronize: true,
    logging: false,
    entities: [Producer],
    migrations: ["src/migrations/**/*.ts"],
    subscribers: [],
    migrationsTableName: "migrations",
});
