import * as TR from "../repositories/testRepository.js";
import * as CR from "../repositories/categoryRepository.js";
import * as TMR from "../repositories/termRepository.js";

import AppError from "../config/error.js";
import AppLog from "../events/AppLog.js";

import "../config/setup.js"

export async function addNewTest(testInfo: TR.CreateTestData) {
  const category = await CR.findById(testInfo.categoryId);
  if (!category) {
    throw new AppError(
      "Category not found",
      404,
      "Category not found",
      "Ensure to provide a valid category"
    );
  }

  await TR.createTest(testInfo);

  AppLog("Service", "Test Created");
}

export async function getTestsByDiscpline() {
  const tests = await TR.findTestsByDiscipline();

  AppLog("Service", "Tests found");
  return tests;
}

export async function getTestsByTeacher() {
  const tests = await TR.findTestsByTeacher();
  const term = await TMR.findAll();

  AppLog("Service", "Tests found");
  return tests.map((item) => {
    return {
      name: item.name,
      term: term.map((term) => {
        return {
          number: term,
          tests: item.tests
            .filter((test) => test.discipline.term.number === term)
            .map((test) => {
              return {
                name: test.name,
                pdfUrl: test.pdfUrl,
                discipline: test.discipline.name,
              };
            }),
        };
      }),
    };
  });
}
