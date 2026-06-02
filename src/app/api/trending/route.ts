import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const QUALITY_SOURCES = [
  "TechCrunch", "The Verge", "Wired", "Ars Technica", "MIT Tech Review",
  "VentureBeat", "BBC Technology", "Reuters Tech", "The Guardian Tech",
  "Engadget", "MENAbytes", "Rest of World", "TechCabal", "Sifted",
];

export async function GET() {
  const cutoff = new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString();

  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .in("source_name", QUALITY_SOURCES)
    .gte("published_at", cutoff)
    .order("published_at", { ascending: false })
    .limit(15);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ articles: data ?? [] });
}
