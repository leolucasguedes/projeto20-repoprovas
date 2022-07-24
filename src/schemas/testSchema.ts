import Joi from "joi";

import { CreateTestData } from "../repositories/testRepository.js";

export const testSchema = Joi.object<CreateTestData>({
  name: Joi.string().required(),
  pdfUrl: Joi.string().uri().required(),
  categoryId: Joi.number().required(),
  disciplineTeacherId: Joi.number().required()
});