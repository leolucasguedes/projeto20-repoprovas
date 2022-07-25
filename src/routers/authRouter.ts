import { Router } from "express";

import validSchema from "../middlewares/schemaValidator"
import { signUpSchema,loginSchema } from "../schemas/authSchema";
import * as AC from "../controllers/authController"

const authRouter = Router();

authRouter.post("/signup", validSchema(signUpSchema, "./signup"), AC.registerUser);
authRouter.post("/signin", validSchema(loginSchema, "/signin"), AC.loginUser);

export default authRouter;