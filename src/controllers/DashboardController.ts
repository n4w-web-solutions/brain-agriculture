// src/controllers/dashboardController.ts
import { Request, Response } from "express";
import { DashboardService } from "../services/DashboardService";

export class DashboardController {
    static async dashboard(req: Request, res: Response) {
        try {
            const dashboardData = await DashboardService.getDashboardData();
            return res.status(200).json(dashboardData);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }
}
