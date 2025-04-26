/*
  Warnings:

  - A unique constraint covering the columns `[password]` on the table `TestUser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `TestUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TestUser" ADD COLUMN     "password" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "TestUser_password_key" ON "TestUser"("password");
