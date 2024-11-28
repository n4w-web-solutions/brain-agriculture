import { ProducerRepository } from "../repositories/ProducerRepository";
import { dashboardMock } from "../mocks/dashboardMock";  // Importando o mock do dashboard

export class DashboardService {
    static async getDashboardData() {
        // Total de fazendas
        const totalFarms = await ProducerRepository.count();

        // Total de hectares (soma das áreas totais)
        const totalHectares = await ProducerRepository
            .createQueryBuilder("producers")
            .select("SUM(total_area)", "total")
            .getRawOne();

        // Gráfico de pizza por estado
        const farmsByState = await ProducerRepository
            .createQueryBuilder("producers")
            .select("state", "state")
            .addSelect("CAST(COUNT(*) AS INT)", "count")
            .groupBy("state")
            .getRawMany();

        // Gráfico de pizza por cultura
        const cropsByType = await ProducerRepository
            .createQueryBuilder("producers")
            .select("UNNEST(crops)", "crop")
            .addSelect("CAST(COUNT(*) AS INT)", "count")
            .groupBy("crop")
            .getRawMany();

        // Gráfico de pizza por uso de solo
        const landUsage = await ProducerRepository
            .createQueryBuilder("producers")
            .select("CAST(SUM(agricultural_area) AS DECIMAL)", "agriculture_area")
            .addSelect("CAST(SUM(vegetation_area) AS DECIMAL)", "vegetation_area")
            .getRawOne();

        return {
            totalFarms,
            totalHectares: parseFloat(totalHectares?.total || "0"),
            farmsByState: farmsByState || [],
            cropsByType: cropsByType || [],
            landUsage: [
                { use: "agriculture", hectares: parseFloat(landUsage?.agricultural_area || 0)},
                { use: "vegetation", hectares: parseFloat(landUsage?.vegetation_area || 0)}
            ],
        };
    }
    
    static async getDashboardDataMock() {
        return dashboardMock;  // Retornando os dados mockados do dashboard
    }
}
