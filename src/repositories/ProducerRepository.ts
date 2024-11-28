import { AppDataSource } from "../dataSource";
import { Producer } from "../entities/Producer";

export const ProducerRepository = AppDataSource.getRepository(Producer);
