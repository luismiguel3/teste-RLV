"use server";
import { writeFileSync } from "fs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const file = formData.get("file");

  if (file instanceof File) {
    const fileName = file.name;
    const buffered = Buffer.from(await file.arrayBuffer());
    writeFileSync(`./src/private/${fileName}`, buffered); // Salvando na pasta privada
  } else {
    return NextResponse.json({ message: "Invalid file" });
  }
  return NextResponse.json({ message: "File uploaded" });
}
