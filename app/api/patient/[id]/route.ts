import prisma from "medoff/prisma/client";
import { NextRequest, NextResponse } from "next/server";

// @desc Get particular patient
// @route GET /api/patient/:id
// @access public
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const patient = await prisma.patient.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!patient) {
    return NextResponse.json({ error: "Patient profile doesn't exists" });
  }
  NextResponse.json(patient, { status: 200 });
}
