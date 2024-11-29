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
exports.ProducerController = void 0;
const ProducerService_1 = require("../services/ProducerService");
class ProducerController {
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const producer = yield ProducerService_1.ProducerService.create(req.body);
                return res.status(201).json(producer);
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const producer = yield ProducerService_1.ProducerService.update(id, req.body);
                return res.status(200).json(producer);
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const producers = yield ProducerService_1.ProducerService.listAll();
                return res.status(200).json(producers);
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    static getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const producer = yield ProducerService_1.ProducerService.getOne(id);
                return res.status(200).json(producer);
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                yield ProducerService_1.ProducerService.delete(id);
                return res.status(204).send();
            }
            catch (error) {
                return res.status(400).json({ message: error.message });
            }
        });
    }
}
exports.ProducerController = ProducerController;
