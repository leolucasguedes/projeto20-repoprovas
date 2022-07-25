import { Router } from "express";

import validSchema from "../middlewares/schemaValidator"
import { validToken } from "../middlewares/tokenValidator";
import { testSchema } from "../schemas/testSchema";
import * as TC from "../controllers/testController"

const testRouter = Router();

testRouter.post("/tests", validSchema(testSchema, "./test"), TC.addTest);
testRouter.get("/testsByDiscipline", validToken, TC.getTestsByDiscipline);
testRouter.get("/testsByTeacher", validToken, TC.getTestsByTeacher);

export default testRouter;