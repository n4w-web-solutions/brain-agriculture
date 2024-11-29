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
const ProducerService_1 = require("../../services/ProducerService");
describe("ProducerService", () => {
    it("should throw an error if agricultural + vegetation area exceeds total area", () => __awaiter(void 0, void 0, void 0, function* () {
        const invalidProducer = {
            cpf_cnpj: "12345678901",
            name: "John Doe",
            farm_name: "Farm A",
            city: "City A",
            state: "ST",
            total_area: 100,
            agricultural_area: 60,
            vegetation_area: 50,
            crops: ["Soja", "Arroz"],
        };
        yield expect(ProducerService_1.ProducerService.create(invalidProducer)).rejects.toThrow("Agricultural and vegetation area exceeds total area.");
    }));
});
