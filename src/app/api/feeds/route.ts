import { NextResponse } from "next/server";
import { fetchAllSources } from "@/lib/rss";

export const maxDuration = 60;

function isAuthorized(req: Request): boolean {
  return req.headers.get("authorization") === `Bearer ${process.env.CRON_SECRET}`;
}

// Cron-triggered scrape
export async function POST(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const result = await fetchAllSources();
  return NextResponse.json({ success: true, ...result });
}

// Dev-only manual trigger
export async function GET() {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ error: "Only available in development" }, { status: 403 });
  }
  const result = await fetchAllSources();
  return NextResponse.json({ success: true, ...result });
}
