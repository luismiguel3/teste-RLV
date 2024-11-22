"use server";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const files = await prisma.document.findMany();
  console.log("executouu");
  console.log(req);

  return NextResponse.json(files, { status: 201 });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const document = await prisma.document.create({
    data: {
      ...body,
    },
  });

  return NextResponse.json(document, { status: 201 });
}
