import { Request, Response } from "express";

import * as AS from "../services/authService.js";
import { CreateUserData, SignUpBody } from "../schemas/authSchema.js";

export async function registerUser(req: Request, res: Response) {
  const userInfo: SignUpBody = req.body;

  await AS.createUser(userInfo);

  res.sendStatus(201);
}

export async function loginUser(req: Request, res: Response) {
  const userInfo: CreateUserData = req.body;

  const token = await AS.loginUser(userInfo);

  res.status(200).send({ token });
}