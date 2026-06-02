import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// Returns top 6 articles per day for the last 7 days, grouped by date
export async function GET() {
  const cutoff = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

  const { data, error } = await supabase
    .from("articles")
    .select("id, title, url, source_name, source_region, category, published_at, image_url, description, summary")
    .gte("published_at", cutoff)
    .order("published_at", { ascending: false })
    .limit(200);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Group by local date string (YYYY-MM-DD)
  const byDay: Record<string, typeof data> = {};
  for (const article of data ?? []) {
    const day = article.published_at.slice(0, 10);
    if (!byDay[day]) byDay[day] = [];
    if (byDay[day].length < 6) byDay[day].push(article);
  }

  const issues = Object.entries(byDay)
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([date, articles]) => ({ date, articles }));

  return NextResponse.json({ issues });
}
