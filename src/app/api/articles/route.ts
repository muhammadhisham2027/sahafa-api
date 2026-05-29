import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const region = searchParams.get("region");
  const category = searchParams.get("category");
  const page = parseInt(searchParams.get("page") ?? "1");
  const limit = 30;
  const from = (page - 1) * limit;

  let query = supabase
    .from("articles")
    .select("*", { count: "exact" })
    .order("published_at", { ascending: false })
    .range(from, from + limit - 1);

  if (region && region !== "All") query = query.eq("source_region", region);
  if (category && category !== "All") query = query.eq("category", category);

  const { data, error, count } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ articles: data, total: count, page, limit });
}
