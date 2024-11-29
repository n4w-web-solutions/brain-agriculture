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
exports.DashboardService = void 0;
const ProducerRepository_1 = require("../repositories/ProducerRepository");
const dashboardMock_1 = require("../mocks/dashboardMock"); // Importando o mock do dashboard
class DashboardService {
    static getDashboardData() {
        return __awaiter(this, void 0, void 0, function* () {
            // Total de fazendas
            const totalFarms = yield ProducerRepository_1.ProducerRepository.count();
            // Total de hectares (soma das áreas totais)
            const totalHectares = yield ProducerRepository_1.ProducerRepository
                .createQueryBuilder("producers")
                .select("SUM(total_area)", "total")
                .getRawOne();
            // Gráfico de pizza por estado
            const farmsByState = yield ProducerRepository_1.ProducerRepository
                .createQueryBuilder("producers")
                .select("state", "state")
                .addSelect("CAST(COUNT(*) AS INT)", "count")
                .groupBy("state")
                .getRawMany();
            // Gráfico de pizza por cultura
            const cropsByType = yield ProducerRepository_1.ProducerRepository
                .createQueryBuilder("producers")
                .select("UNNEST(crops)", "crop")
                .addSelect("CAST(COUNT(*) AS INT)", "count")
                .groupBy("crop")
                .getRawMany();
            // Gráfico de pizza por uso de solo
            const landUsage = yield ProducerRepository_1.ProducerRepository
                .createQueryBuilder("producers")
                .select("CAST(SUM(agricultural_area) AS DECIMAL)", "agriculture_area")
                .addSelect("CAST(SUM(vegetation_area) AS DECIMAL)", "vegetation_area")
                .getRawOne();
            return {
                totalFarms,
                totalHectares: parseFloat((totalHectares === null || totalHectares === void 0 ? void 0 : totalHectares.total) || "0"),
                farmsByState: farmsByState || [],
                cropsByType: cropsByType || [],
                landUsage: [
                    { use: "agriculture", hectares: parseFloat((landUsage === null || landUsage === void 0 ? void 0 : landUsage.agricultural_area) || 0) },
                    { use: "vegetation", hectares: parseFloat((landUsage === null || landUsage === void 0 ? void 0 : landUsage.vegetation_area) || 0) }
                ],
            };
        });
    }
    static getDashboardDataMock() {
        return __awaiter(this, void 0, void 0, function* () {
            return dashboardMock_1.dashboardMock; // Retornando os dados mockados do dashboard
        });
    }
}
exports.DashboardService = DashboardService;
