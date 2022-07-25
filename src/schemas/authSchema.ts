import Joi from "joi";
import { User } from "@prisma/client";

export type CreateUserData = Omit<User, "id" | "createdAt">;

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
