"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProducerSchema = void 0;
const zod_1 = require("zod");
exports.UpdateProducerSchema = zod_1.z.object({
    name: zod_1.z.string().min(1).optional(),
    farm_name: zod_1.z.string().min(1).optional(),
    city: zod_1.z.string().min(1).optional(),
    state: zod_1.z.string().length(2).optional(),
    total_area: zod_1.z.number().positive().optional(),
    agricultural_area: zod_1.z.number().nonnegative().optional(),
    vegetation_area: zod_1.z.number().nonnegative().optional(),
    crops: zod_1.z.array(zod_1.z.string()).optional(),
});
