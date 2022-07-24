import { Router } from "express";

import validSchema from "../middlewares/schemaValidator.js"
import { validToken } from "../middlewares/tokenValidator.js";
import { testSchema } from "../schemas/testSchema.js";
import * as TC from "../controllers/testController.js"

const testRouter = Router();

testRouter.post("/test", validSchema(testSchema, "./test"), TC.addTest);
testRouter.get("/testByDiscipline", validToken, TC.getTestsByDiscipline);
testRouter.get("/testByTeacher", validToken, TC.getTestsByTeacher);

export default testRouter;