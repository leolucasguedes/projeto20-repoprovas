import Joi from "joi";

import { CreateUserData } from "../repositories/authRepository.js";

export type SignUpBody = CreateUserData & { confirmPassword: string };

export const signUpSchema = Joi.object<SignUpBody>({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
});

export const loginSchema = Joi.object<CreateUserData>({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});
