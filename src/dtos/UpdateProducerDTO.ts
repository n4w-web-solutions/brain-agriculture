import { z } from "zod";

export const UpdateProducerSchema = z.object({
    name: z.string().min(1).optional(),
    farm_name: z.string().min(1).optional(),
    city: z.string().min(1).optional(),
    state: z.string().length(2).optional(),
    total_area: z.number().positive().optional(),
    agricultural_area: z.number().nonnegative().optional(),
    vegetation_area: z.number().nonnegative().optional(),
    crops: z.array(z.string()).optional(),
});

export type UpdateProducerDTO = z.infer<typeof UpdateProducerSchema>;
