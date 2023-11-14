import { NextRequest, NextResponse } from "next/server";
import doctorSchema from "../doctorSchema";
import prisma from "medoff/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const doctor = await prisma.doctor.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!doctor) {
    return NextResponse.json({ error: "Doctor profile does not exist" });
  }

  return NextResponse.json(doctor);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = doctorSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const checkExistingDoctor = await prisma.doctor.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!checkExistingDoctor) {
    return NextResponse.json({ error: "Doctor doesn't exists" });
  }

  const updatedDoctorProfile = await prisma.doctor.update({
    where: { id: parseInt(params.id) },
    data: {
      email: body.email,
      name: body.name,
      age: body.age,
      bio: body.bio,
      gender: body.gender,
      isAvailable: body.isAvailable,
      yoe: body.yoe,
      consultingFee: body.consultingFee,
      ratings: body.rating,
    },
  });
  return NextResponse.json(updatedDoctorProfile, { status: 201 });
}
