export interface DashboardResponseDTO {
    totalFarms: number;
    totalArea: number;
    stateDistribution: { [key: string]: number }; // Exemplo: { "SP": 50, "MG": 30 }
    cropDistribution: { [key: string]: number }; // Exemplo: { "Soja": 40, "Milho": 60 }
    landUse: {
        agricultural: number;
        vegetation: number;
    };
}
