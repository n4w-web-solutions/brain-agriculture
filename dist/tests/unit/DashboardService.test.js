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
const DashboardService_1 = require("../../services/DashboardService");
const ProducerRepository_1 = require("../../repositories/ProducerRepository");
const dashboardMock_1 = require("../../mocks/dashboardMock");
jest.mock("../../repositories/ProducerRepository");
describe("Dashboard Data", () => {
    it("should return the correct dashboard data", () => __awaiter(void 0, void 0, void 0, function* () {
        ProducerRepository_1.ProducerRepository.count = jest.fn().mockResolvedValue(5);
        ProducerRepository_1.ProducerRepository.createQueryBuilder = jest.fn().mockReturnValue({
            select: jest.fn().mockReturnThis(),
            addSelect: jest.fn().mockReturnThis(),
            groupBy: jest.fn().mockReturnThis(),
            getRawMany: jest.fn()
                .mockResolvedValueOnce([
                { state: "SP", count: 4 },
                { state: "MG", count: 1 },
            ])
                .mockResolvedValueOnce([
                { crop: "Cana de Açúcar", count: 1 },
                { crop: "Soja", count: 2 },
                { crop: "Algodão", count: 1 },
                { crop: "Café", count: 2 },
                { crop: "Milho", count: 3 }
            ]),
            getRawOne: jest
                .fn()
                .mockResolvedValueOnce({ total: 660 })
                .mockResolvedValueOnce({
                agricultural_area: 450,
                vegetation_area: 210,
            }),
        });
        const dashboard = yield DashboardService_1.DashboardService.getDashboardData();
        expect(dashboard).toEqual(dashboardMock_1.dashboardMock);
    }));
});
