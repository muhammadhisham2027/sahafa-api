import Parser from "rss-parser";
import { supabase } from "./supabase";
import { SOURCES, type Source } from "./sources";

const parser = new Parser({
  timeout: 10000,
  headers: { "User-Agent": "Mozilla/5.0 (compatible; Sahafa/1.0)" },
});

async function fetchSource(source: Source): Promise<number> {
  let feed;
  try {
    feed = await parser.parseURL(source.url);
  } catch {
    console.warn(`[sahafa] failed to fetch ${source.name}`);
    return 0;
  }

  let inserted = 0;
  for (const item of feed.items.slice(0, 20)) {
    if (!item.title || !item.link) continue;

    const { error } = await supabase.from("articles").upsert(
      {
        title: item.title.trim(),
        url: item.link,
        description: item.contentSnippet?.slice(0, 500) ?? item.summary?.slice(0, 500) ?? null,
        image_url: item.enclosure?.url ?? null,
        source_name: source.name,
        source_region: source.region,
        category: source.category,
        published_at: item.pubDate ? new Date(item.pubDate).toISOString() : new Date().toISOString(),
      },
      { onConflict: "url", ignoreDuplicates: true }
    );

    if (!error) inserted++;
  }

  return inserted;
}

export async function fetchAllSources(): Promise<{ total: number; bySource: Record<string, number> }> {
  const results = await Promise.allSettled(SOURCES.map((s) => fetchSource(s)));
  const bySource: Record<string, number> = {};
  let total = 0;

  results.forEach((result, i) => {
    const count = result.status === "fulfilled" ? result.value : 0;
    bySource[SOURCES[i].name] = count;
    total += count;
  });

  return { total, bySource };
}
