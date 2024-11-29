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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProducerService = void 0;
const CreateProducerDTO_1 = require("../dtos/CreateProducerDTO");
const UpdateProducerDTO_1 = require("../dtos/UpdateProducerDTO");
const ProducerRepository_1 = require("../repositories/ProducerRepository");
const cpf_cnpj_validator_1 = __importDefault(require("cpf-cnpj-validator"));
const producersMock_1 = require("../mocks/producersMock"); // Importando o mock de produtores
class ProducerService {
    static create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validação com zod
            const validatedData = CreateProducerDTO_1.CreateProducerSchema.parse(data);
            const Joi = require('@hapi/joi').extend(cpf_cnpj_validator_1.default);
            const cpfSchema = Joi.document().cpf();
            const cnpjSchema = Joi.document().cnpj();
            const { cpf_cnpj, total_area, agricultural_area, vegetation_area } = validatedData;
            const docIsValid = (yield cpfSchema.validateAsync(cpf_cnpj)) || (yield cnpjSchema.validateAsync(cpf_cnpj));
            // Validação adicional de CPF ou CNPJ
            if (!docIsValid) {
                throw new Error("Invalid CPF or CNPJ.");
            }
            // Regra de negócio
            if (agricultural_area + vegetation_area > total_area) {
                throw new Error("Agricultural and vegetation area exceeds total area.");
            }
            // Criação do produtor
            const producer = ProducerRepository_1.ProducerRepository.create(validatedData);
            return yield ProducerRepository_1.ProducerRepository.save(producer);
        });
    }
    static update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validação com zod
            const validatedData = UpdateProducerDTO_1.UpdateProducerSchema.parse(data);
            const producer = yield ProducerRepository_1.ProducerRepository.findOneBy({ id });
            if (!producer)
                throw new Error("Producer not found");
            const { total_area, agricultural_area, vegetation_area } = validatedData;
            // Regra de negócio
            if (total_area &&
                agricultural_area &&
                vegetation_area &&
                agricultural_area + vegetation_area > total_area) {
                throw new Error("Agricultural and vegetation area exceeds total area.");
            }
            // Atualização do produtor
            ProducerRepository_1.ProducerRepository.merge(producer, validatedData);
            return yield ProducerRepository_1.ProducerRepository.save(producer);
        });
    }
    static listAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ProducerRepository_1.ProducerRepository.find();
        });
    }
    static getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ProducerRepository_1.ProducerRepository.findOneBy({ id });
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const producer = yield ProducerRepository_1.ProducerRepository.findOneBy({ id });
            if (!producer)
                throw new Error("Producer not found");
            yield ProducerRepository_1.ProducerRepository.remove(producer);
        });
    }
    static getAllProducersMock() {
        return __awaiter(this, void 0, void 0, function* () {
            return producersMock_1.producersMock; // Retornando dados mockados
        });
    }
    static getProducerByIdMock(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return producersMock_1.producersMock.find((producer) => producer.id === id);
        });
    }
    static createProducerMock(producer) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProducer = Object.assign(Object.assign({}, producer), { id: producersMock_1.producersMock.length + 1 });
            producersMock_1.producersMock.push(newProducer);
            return newProducer;
        });
    }
    static updateProducerMock(id, updatedProducer) {
        return __awaiter(this, void 0, void 0, function* () {
            const producerIndex = producersMock_1.producersMock.findIndex((producer) => producer.id === id);
            if (producerIndex !== -1) {
                producersMock_1.producersMock[producerIndex] = Object.assign(Object.assign({}, producersMock_1.producersMock[producerIndex]), updatedProducer);
                return producersMock_1.producersMock[producerIndex];
            }
            return null;
        });
    }
    static deleteProducerMock(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const producerIndex = producersMock_1.producersMock.findIndex((producer) => producer.id === id);
            if (producerIndex !== -1) {
                producersMock_1.producersMock.splice(producerIndex, 1);
                return true;
            }
            return false;
        });
    }
}
exports.ProducerService = ProducerService;
