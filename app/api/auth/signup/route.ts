import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcrypt";
import prisma from "@/prisma/client";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    // validations of email type & password of some type (maybe using ZOD)
    const hashedPassword = await hash(password, 10);
  } catch (error) {
    console.log({ error });
  }
  return NextResponse.json({ message: "Success" });
}
