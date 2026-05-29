import { NextResponse } from "next/server";
import { sendNewsletter } from "@/lib/email";

export const maxDuration = 60;

export async function POST(req: Request) {
  if (req.headers.get("authorization") !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const result = await sendNewsletter();
  return NextResponse.json({ success: true, ...result });
}
