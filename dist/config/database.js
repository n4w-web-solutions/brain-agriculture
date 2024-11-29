"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Producer_1 = require("../entities/Producer");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "app",
    password: "142536",
    database: "producer_management",
    synchronize: true,
    logging: false,
    entities: [Producer_1.Producer],
    migrations: [],
    subscribers: [],
});
