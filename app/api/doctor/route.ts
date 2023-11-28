import { NextRequest, NextResponse } from "next/server";
import doctorSchema from "./doctorSchema";
import prisma from "medoff/prisma/client";

// @desc Get all available doctors 
// @route GET /api/doctor
// @access public
export async function GET(request: NextRequest) {
  const doctors = await prisma.doctor.findMany();
  if (!doctors) {
    return NextResponse.json({ error: "No doctor is currently available" });
  }
  return NextResponse.json(doctors);
}

// @desc Register a new doctor
// @route POST /api/doctor
// @access private
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = doctorSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const newDoctor = await prisma.doctor.create({
    data: {
      email: body.email,
      name: body.name,
    },
  });

  return NextResponse.json(newDoctor, { status: 200 });
}
