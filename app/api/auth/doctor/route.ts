import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcrypt";
import prisma from "@/prisma/client";

export async function POST(request: NextRequest) {
  try {
    const { username, email, password } = await request.json();
    // validations of email type & password of some type (maybe using ZOD)
    const hashedPassword = await hash(password, 10);
    const newDoctor = await prisma.doctor.create({
      data: {
        email,
        password: hashedPassword,
        name: username,
      },
    });
  } catch (error) {
    console.log({ error });
  }
  return NextResponse.json({ message: "Success" });
}
