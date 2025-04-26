/*
  Warnings:

  - You are about to drop the `Test_User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Test_User";

-- CreateTable
CREATE TABLE "TestUser" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "TestUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TestUser_email_key" ON "TestUser"("email");
