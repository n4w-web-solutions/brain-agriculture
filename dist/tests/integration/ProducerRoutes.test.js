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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app"));
describe("Producer Routes", () => {
    it("should create a new producer", () => __awaiter(void 0, void 0, void 0, function* () {
        const producerData = {
            cpf_cnpj: "12345678901",
            name: "John Doe",
            farm_name: "Farm X",
            city: "City Y",
            state: "State Z",
            total_area: 100,
            agricultural_area: 50,
            vegetation_area: 50
        };
        const response = yield (0, supertest_1.default)(app_1.default).post("/producers").send(producerData);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
        expect(response.body.name).toBe("John Doe");
    }));
    it("should list all producers", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get("/producers");
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    }));
    it("should fetch a single producer by ID", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get("/producers/1");
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("id");
    }));
    it("should update a producer by ID", () => __awaiter(void 0, void 0, void 0, function* () {
        const updateData = { name: "Updated Name" };
        const response = yield (0, supertest_1.default)(app_1.default).put("/producers/1").send(updateData);
        expect(response.status).toBe(200);
        expect(response.body.name).toBe("Updated Name");
    }));
    it("should delete a producer by ID", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).delete("/producers/1");
        expect(response.status).toBe(204);
    }));
});
