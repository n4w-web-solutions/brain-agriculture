import express from "express";
import cors from "cors";
import router from "./routes";
import { ErrorMiddleware } from "./middlewares/ErrorMiddleware";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(ErrorMiddleware);

export default app;
