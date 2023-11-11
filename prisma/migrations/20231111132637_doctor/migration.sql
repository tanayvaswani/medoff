-- CreateTable
CREATE TABLE "Doctor" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "bio" TEXT NOT NULL DEFAULT 'Qualifications: and Specialist: ',
    "gender" TEXT NOT NULL,
    "isAvailable" BOOLEAN NOT NULL,
    "yoe" INTEGER NOT NULL,
    "consultingFee" INTEGER NOT NULL,
    "ratings" DOUBLE PRECISION NOT NULL DEFAULT 0.0,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_email_key" ON "Doctor"("email");
