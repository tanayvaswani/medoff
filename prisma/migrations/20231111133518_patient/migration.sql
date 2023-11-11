-- CreateEnum
CREATE TYPE "Role" AS ENUM ('DOCTOR', 'PATIENT');

-- AlterTable
ALTER TABLE "Doctor" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'DOCTOR';

-- CreateTable
CREATE TABLE "Patient" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "weight" INTEGER NOT NULL DEFAULT 0,
    "height" INTEGER NOT NULL DEFAULT 100,
    "role" "Role" NOT NULL DEFAULT 'PATIENT',

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Patient_email_key" ON "Patient"("email");
