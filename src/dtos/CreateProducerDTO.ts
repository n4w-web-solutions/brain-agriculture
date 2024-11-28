import { z } from "zod";

export const CreateProducerSchema = z.object({
    cpf_cnpj: z.string().refine((value) => value.length === 11 || value.length === 14, {
        message: "CPF ou CNPJ deve ter 11 ou 14 caracteres.",
    }),
    name: z.string().min(1, "Nome é obrigatório."),
    farm_name: z.string().min(1, "Nome da fazenda é obrigatório."),
    city: z.string().min(1, "Cidade é obrigatória."),
    state: z.string().length(2, "Estado deve ter 2 caracteres."),
    total_area: z.number().positive("Área total deve ser positiva."),
    agricultural_area: z.number().nonnegative("Área agricultável deve ser positiva."),
    vegetation_area: z.number().nonnegative("Área de vegetação deve ser positiva."),
    crops: z.array(z.string()).nonempty("É necessário informar pelo menos uma cultura."),
});

export type CreateProducerDTO = z.infer<typeof CreateProducerSchema>;
