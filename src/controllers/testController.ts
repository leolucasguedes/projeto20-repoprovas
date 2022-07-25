import { Request, Response } from "express";

import * as TS from "../services/testService";
import { CreateTestData } from "../repositories/testRepository";

export async function addTest(req: Request, res: Response) {
  const testInfo: CreateTestData = req.body;

  await TS.addNewTest(testInfo);

  res.sendStatus(201);
}

export async function getTestsByDiscipline(req: Request, res: Response) {
  const tests = await TS.getTestsByDiscpline();

  res.status(200).send(tests);
}

export async function getTestsByTeacher(req: Request, res: Response) {
  const tests = await TS.getTestsByTeacher();

  res.status(200).send(tests);
}
