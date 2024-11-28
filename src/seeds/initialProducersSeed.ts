// src/seeds/initialProducersSeed.ts
import { DataSource } from "typeorm";
import { Producer } from "../entities/Producer";

export const runInitialProducersSeed = async (dataSource: DataSource) => {
    const producerRepository = dataSource.getRepository(Producer);

    const producers = [{
        cpf_cnpj: "66903141000122",
        name: "João Silva",
        farm_name: "Fazenda Silva",
        city: "Campinas",
        state: "SP",
        total_area: 150,
        agricultural_area: 100,
        vegetation_area: 50,
        crops: ["Soja", "Milho"],
    },
    {
        cpf_cnpj: "05614101000176",
        name: "Maria Oliveira",
        farm_name: "Fazenda Oliveira",
        city: "Ribeirão Preto",
        state: "SP",
        total_area: 200,
        agricultural_area: 150,
        vegetation_area: 50,
        crops: ["Algodão", "Café"],
    },
    {
        cpf_cnpj: "95250777000110",
        name: "Carlos Pereira",
        farm_name: "Fazenda Pereira",
        city: "Piracicaba",
        state: "SP",
        total_area: 100,
        agricultural_area: 60,
        vegetation_area: 40,
        crops: ["Cana de Açúcar", "Milho"],
    },
    {
        cpf_cnpj: "35419664000174",
        name: "Ana Souza",
        farm_name: "Fazenda Ana",
        city: "Uberlândia",
        state: "MG",
        total_area: 120,
        agricultural_area: 80,
        vegetation_area: 40,
        crops: ["Soja", "Café"],
    },
    {
        cpf_cnpj: "29018108000193",
        name: "Pedro Lima",
        farm_name: "Fazenda Lima",
        city: "Sorocaba",
        state: "SP",
        total_area: 90,
        agricultural_area: 60,
        vegetation_area: 30,
        crops: ["Milho"],
    }];

    for (const producerData of producers) {
        const producer = producerRepository.create(producerData);
        await producerRepository.save(producer);
    }

    console.log("Inserted initial producers into the database.");
};
