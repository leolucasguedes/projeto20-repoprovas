import express, { Request, Response, json } from "express";
import cors from "cors";
import "express-async-errors";
import helmet from "helmet";
import "../config/setup.js"

import router from "../routers/index.js";
import ExceptionHandler from '../events/AppError.js';

const app = express();

app.use(cors());
app.use(json());
app.use(helmet());
app.use(router);
app.use(ExceptionHandler);

export default app;