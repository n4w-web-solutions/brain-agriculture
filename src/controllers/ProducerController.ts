import { Request, Response } from "express";
import { ProducerService } from "../services/ProducerService";

export class ProducerController {
    static async create(req: Request, res: Response) {
        try {
            const producer = await ProducerService.create(req.body);
            return res.status(201).json(producer);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const producer = await ProducerService.update(id, req.body);
            return res.status(200).json(producer);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }

    static async getAll(req: Request, res: Response) {
        try {
            const producers = await ProducerService.listAll();
            return res.status(200).json(producers);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }

    static async getOne(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const producer = await ProducerService.getOne(id);
            return res.status(200).json(producer);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            await ProducerService.delete(id);
            return res.status(204).send();
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }
}
