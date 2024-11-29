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
const dataSource_1 = require("../dataSource");
const initialProducersSeed_1 = require("./initialProducersSeed");
const runSeeds = () => __awaiter(void 0, void 0, void 0, function* () {
    const dataSource = yield dataSource_1.AppDataSource.initialize();
    console.log("Running initial seeds...");
    yield (0, initialProducersSeed_1.runInitialProducersSeed)(dataSource);
    console.log("Seeds executed successfully!");
    yield dataSource.destroy();
});
runSeeds().catch((error) => {
    console.error("Error running seeds:", error);
});
