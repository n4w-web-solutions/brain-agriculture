"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProducerRepository = void 0;
const dataSource_1 = require("../dataSource");
const Producer_1 = require("../entities/Producer");
exports.ProducerRepository = dataSource_1.AppDataSource.getRepository(Producer_1.Producer);
