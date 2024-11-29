"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runInitialProducersSeed = void 0;
const Producer_1 = require("../entities/Producer");
const runInitialProducersSeed = (dataSource) => __awaiter(void 0, void 0, void 0, function* () {
    const producerRepository = dataSource.getRepository(Producer_1.Producer);
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
        yield producerRepository.save(producer);
    }
    console.log("Inserted initial producers into the database.");
});
exports.runInitialProducersSeed = runInitialProducersSeed;
