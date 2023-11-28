import { NextRequest, NextResponse } from "next/server";
import patientSchema from "./patientSchema";
import prisma from "medoff/prisma/client";

// @desc Register a new patient
// @route POST /api/patient
// @access public
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = patientSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const newPatient = await prisma.patient.create({
    data: {
      email: body.email,
      name: body.name,
    },
  });

  return NextResponse.json(newPatient, { status: 200 });
}
