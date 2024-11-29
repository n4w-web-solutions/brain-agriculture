"use strict";
// src/mocks/dashboardMock.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardMock = void 0;
exports.dashboardMock = {
    totalFarms: 5,
    totalHectares: 660,
    farmsByState: [
        { state: 'SP', count: 4 },
        { state: 'MG', count: 1 }
    ],
    cropsByType: [
        { crop: "Cana de Açúcar", count: 1 },
        { crop: "Soja", count: 2 },
        { crop: "Algodão", count: 1 },
        { crop: "Café", count: 2 },
        { crop: "Milho", count: 3 }
    ],
    landUsage: [
        { use: 'agriculture', hectares: 450 },
        { use: 'vegetation', hectares: 210 }
    ]
};
