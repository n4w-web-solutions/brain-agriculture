import { Router } from "express";
import { ProducerController } from "../controllers/ProducerController";
import { DashboardController } from "../controllers/DashboardController";

const router = Router();

router.post("/producers", ProducerController.create);
router.put("/producers/:id", ProducerController.update);
router.get("/producers", ProducerController.getAll);
router.get("/producers/:id", ProducerController.getOne);
router.delete("/producers/:id", ProducerController.delete);

router.get("/dashboard", DashboardController.dashboard);

export default router;
