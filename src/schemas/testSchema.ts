import Joi from "joi";

import { CreateTestData } from "../repositories/testRepository";

export const testSchema = Joi.object<CreateTestData>({
  name: Joi.string().required(),
  pdfUrl: Joi.string().uri().required(),
  categoryId: Joi.number().required(),
  disciplineId: Joi.number().required(),
  teacherId: Joi.number().required()
});