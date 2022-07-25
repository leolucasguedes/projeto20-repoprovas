import { Test } from "@prisma/client";
import prisma from "../config/database.js";

export type CreateTestData = Omit<Test, "id" | "createdAt">;

export async function createTest(test: CreateTestData) {
  await prisma.test.create({ data: test });
}

export async function findTeacherById(id: number) {
  return await prisma.teacher.findUnique({where: { id }});
}

export async function findDisciplineById(id: number) {
  return await prisma.discipline.findUnique({where: { id }});
}

export async function findTestsByDiscipline() {
  return await prisma.term.findMany({
    include: {
      disciplines: {
        select: {
          name: true,
          tests: {
            select: {
              name: true,
              pdfUrl: true,
              teachers: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      },
    },
  });
}

export async function findTestsByTeacher() {
  return await prisma.teacher.findMany({
    include: {
      tests: {
        select: {
          name: true,
          pdfUrl: true,
          discipline: {
            select: {
              name: true,
              term: {
                select: { number: true },
              },
            },
          },
        },
      },
    },
  });
}