import "reflect-metadata";
import { DataSource } from "typeorm";
import { Producer } from "../entities/Producer";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "app",
    password: "142536",
    database: "producer_management",
    synchronize: true,
    logging: false,
    entities: [Producer],
    migrations: [],
    subscribers: [],
});
