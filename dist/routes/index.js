"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProducerController_1 = require("../controllers/ProducerController");
const DashboardController_1 = require("../controllers/DashboardController");
const router = (0, express_1.Router)();
router.post("/producers", ProducerController_1.ProducerController.create);
router.put("/producers/:id", ProducerController_1.ProducerController.update);
router.get("/producers", ProducerController_1.ProducerController.getAll);
router.get("/producers/:id", ProducerController_1.ProducerController.getOne);
router.delete("/producers/:id", ProducerController_1.ProducerController.delete);
router.get("/dashboard", DashboardController_1.DashboardController.dashboard);
exports.default = router;
