// src/seeds/runSeeds.ts
import { DataSource } from "typeorm";
import { AppDataSource } from "../dataSource";
import { runInitialProducersSeed } from "./initialProducersSeed";

const runSeeds = async () => {
    const dataSource: DataSource = await AppDataSource.initialize();

    console.log("Running initial seeds...");
    await runInitialProducersSeed(dataSource);

    console.log("Seeds executed successfully!");
    await dataSource.destroy();
};

runSeeds().catch((error) => {
    console.error("Error running seeds:", error);
});
