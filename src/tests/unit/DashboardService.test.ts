import { DashboardService } from "../../services/DashboardService";
import { ProducerRepository } from "../../repositories/ProducerRepository";
import { dashboardMock } from "../../mocks/dashboardMock";
jest.mock("../../repositories/ProducerRepository");

describe("Dashboard Data", () => {
    it("should return the correct dashboard data", async () => {
        ProducerRepository.count = jest.fn().mockResolvedValue(5);
        ProducerRepository.createQueryBuilder = jest.fn().mockReturnValue({
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

        const dashboard = await DashboardService.getDashboardData();

        expect(dashboard).toEqual(dashboardMock);
    });
});