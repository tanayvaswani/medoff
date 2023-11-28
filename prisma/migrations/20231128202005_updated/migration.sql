/*
  Warnings:

  - You are about to drop the column `age` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `bio` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `consultingFee` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `isAvailable` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `ratings` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `yoe` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `age` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `height` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the `Appointment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_doctorId_fkey";

-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_patientId_fkey";

-- AlterTable
ALTER TABLE "Doctor" DROP COLUMN "age",
DROP COLUMN "bio",
DROP COLUMN "consultingFee",
DROP COLUMN "gender",
DROP COLUMN "isAvailable",
DROP COLUMN "ratings",
DROP COLUMN "role",
DROP COLUMN "yoe";

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "age",
DROP COLUMN "gender",
DROP COLUMN "height",
DROP COLUMN "role",
DROP COLUMN "weight";

-- DropTable
DROP TABLE "Appointment";

-- DropEnum
DROP TYPE "Role";
