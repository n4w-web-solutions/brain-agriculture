"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProducerSchema = void 0;
const zod_1 = require("zod");
exports.CreateProducerSchema = zod_1.z.object({
    cpf_cnpj: zod_1.z.string().refine((value) => value.length === 11 || value.length === 14, {
        message: "CPF ou CNPJ deve ter 11 ou 14 caracteres.",
    }),
    name: zod_1.z.string().min(1, "Nome é obrigatório."),
    farm_name: zod_1.z.string().min(1, "Nome da fazenda é obrigatório."),
    city: zod_1.z.string().min(1, "Cidade é obrigatória."),
    state: zod_1.z.string().length(2, "Estado deve ter 2 caracteres."),
    total_area: zod_1.z.number().positive("Área total deve ser positiva."),
    agricultural_area: zod_1.z.number().nonnegative("Área agricultável deve ser positiva."),
    vegetation_area: zod_1.z.number().nonnegative("Área de vegetação deve ser positiva."),
    crops: zod_1.z.array(zod_1.z.string()).nonempty("É necessário informar pelo menos uma cultura."),
});
