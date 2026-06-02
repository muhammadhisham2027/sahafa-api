import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const region = searchParams.get("region");
  const country = searchParams.get("country");
  const category = searchParams.get("category");
  const sourcesParam = searchParams.get("sources");
  const date = searchParams.get("date"); // today | week | month | all
  const page = parseInt(searchParams.get("page") ?? "1");
  const limit = 30;
  const from = (page - 1) * limit;

  let query = supabase
    .from("articles")
    .select("*", { count: "exact" })
    .order("published_at", { ascending: false })
    .range(from, from + limit - 1);

  if (region && region !== "All") query = query.eq("source_region", region);
  if (country && country !== "All") query = query.eq("source_country", country);
  if (category && category !== "All") query = query.eq("category", category);

  if (sourcesParam) {
    const names = sourcesParam.split(",").map((s) => s.trim()).filter(Boolean);
    if (names.length > 0) query = query.in("source_name", names);
  }

  const now = new Date();
  if (date && date !== "all") {
    let cutoff: Date;
    if (date === "today") {
      cutoff = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    } else if (date === "week") {
      cutoff = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    } else {
      cutoff = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    }
    query = query.gte("published_at", cutoff.toISOString());
  } else {
    // Default: show last 7 days to keep feed fresh
    const defaultCutoff = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    query = query.gte("published_at", defaultCutoff.toISOString());
  }

  const { data, error, count } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ articles: data, total: count, page, limit });
}
