import { NextResponse } from "next/server";
import { SOURCES } from "@/lib/sources";

export async function GET() {
  return NextResponse.json({ sources: SOURCES });
}
