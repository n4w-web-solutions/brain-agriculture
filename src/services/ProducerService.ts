import { CreateProducerSchema, CreateProducerDTO } from "../dtos/CreateProducerDTO";
import { UpdateProducerSchema, UpdateProducerDTO } from "../dtos/UpdateProducerDTO";
import { ProducerRepository } from "../repositories/ProducerRepository";
import validator from "cpf-cnpj-validator";
import { producersMock } from "../mocks/producersMock";  // Importando o mock de produtores

export class ProducerService {
    static async create(data: CreateProducerDTO) {
        // Validação com zod
        const validatedData = CreateProducerSchema.parse(data);

        const Joi = require('@hapi/joi').extend(validator)
        const cpfSchema = Joi.document().cpf();
        const cnpjSchema = Joi.document().cnpj();

        const { cpf_cnpj, total_area, agricultural_area, vegetation_area } = validatedData;

        const docIsValid = await cpfSchema.validateAsync(cpf_cnpj) || await cnpjSchema.validateAsync(cpf_cnpj)

        // Validação adicional de CPF ou CNPJ
        if ( !docIsValid ) {
            throw new Error("Invalid CPF or CNPJ.");
        }

        // Regra de negócio
        if (agricultural_area + vegetation_area > total_area) {
            throw new Error("Agricultural and vegetation area exceeds total area.");
        }

        // Criação do produtor
        const producer = ProducerRepository.create(validatedData);
        return await ProducerRepository.save(producer);
    }

    static async update(id: number, data: UpdateProducerDTO) {
        // Validação com zod
        const validatedData = UpdateProducerSchema.parse(data);

        const producer = await ProducerRepository.findOneBy({ id });
        if (!producer) throw new Error("Producer not found");

        const { total_area, agricultural_area, vegetation_area } = validatedData;

        // Regra de negócio
        if (
            total_area &&
            agricultural_area &&
            vegetation_area &&
            agricultural_area + vegetation_area > total_area
        ) {
            throw new Error("Agricultural and vegetation area exceeds total area.");
        }

        // Atualização do produtor
        ProducerRepository.merge(producer, validatedData);
        return await ProducerRepository.save(producer);
    }

    static async listAll() {
        return await ProducerRepository.find();
    }

    static async getOne(id: number) {
        return await ProducerRepository.findOneBy({ id });
    }

    static async delete(id: number) {
        const producer = await ProducerRepository.findOneBy({ id });
        if (!producer) throw new Error("Producer not found");

        await ProducerRepository.remove(producer);
    }

    static async getAllProducersMock() {
        return producersMock;  // Retornando dados mockados
      }
    
      static async getProducerByIdMock(id: number) {
        return producersMock.find((producer) => producer.id === id);
      }
    
      static async createProducerMock(producer: any) {
        const newProducer = { ...producer, id: producersMock.length + 1 };
        producersMock.push(newProducer);
        return newProducer;
      }
    
      static async updateProducerMock(id: number, updatedProducer: any) {
        const producerIndex = producersMock.findIndex((producer) => producer.id === id);
        if (producerIndex !== -1) {
          producersMock[producerIndex] = { ...producersMock[producerIndex], ...updatedProducer };
          return producersMock[producerIndex];
        }
        return null;
      }
    
      static async deleteProducerMock(id: number) {
        const producerIndex = producersMock.findIndex((producer) => producer.id === id);
        if (producerIndex !== -1) {
          producersMock.splice(producerIndex, 1);
          return true;
        }
        return false;
      }
}
