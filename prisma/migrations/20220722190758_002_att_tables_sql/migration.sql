/*
  Warnings:

  - You are about to drop the `TestsTerm` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TestsTerm" DROP CONSTRAINT "TestsTerm_termId_fkey";

-- DropForeignKey
ALTER TABLE "TestsTerm" DROP CONSTRAINT "TestsTerm_testId_fkey";

-- DropTable
DROP TABLE "TestsTerm";
