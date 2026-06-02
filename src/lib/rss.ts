import Parser from "rss-parser";
import Anthropic from "@anthropic-ai/sdk";
import { supabase } from "./supabase";
import { SOURCES, type Source } from "./sources";

const parser = new Parser({
  timeout: 8000,
  headers: { "User-Agent": "Mozilla/5.0 (compatible; Sahafa/1.0)" },
});

const anthropic = process.env.ANTHROPIC_API_KEY
  ? new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  : null;

// Only ingest articles published in the last 4 days
const INGEST_MAX_AGE_MS = 4 * 24 * 60 * 60 * 1000;
// Delete articles older than 21 days from the DB
const CLEANUP_MAX_AGE_MS = 21 * 24 * 60 * 60 * 1000;

async function generateSummary(title: string, description: string | null): Promise<string | null> {
  if (!anthropic) return null;
  try {
    const msg = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 80,
      messages: [{
        role: "user",
        content: `Summarize this tech article in one clear sentence (max 20 words). Title: "${title}". ${description ? `Description: "${description.slice(0, 300)}"` : ""}`,
      }],
    });
    const text = msg.content[0].type === "text" ? msg.content[0].text.trim() : null;
    return text;
  } catch {
    return null;
  }
}

async function fetchSource(source: Source, cutoff: Date): Promise<number> {
  let feed;
  try {
    feed = await parser.parseURL(source.url);
  } catch {
    console.warn(`[sahafa] failed: ${source.name}`);
    return 0;
  }

  let inserted = 0;
  for (const item of feed.items.slice(0, 15)) {
    if (!item.title || !item.link) continue;

    // Require a valid date — skip articles with no date
    const rawDate = item.isoDate ?? item.pubDate;
    if (!rawDate) continue;

    const pubDate = new Date(rawDate);
    if (isNaN(pubDate.getTime())) continue;

    // Skip articles older than the cutoff
    if (pubDate < cutoff) continue;

    const description = item.contentSnippet?.slice(0, 500) ?? item.summary?.slice(0, 500) ?? null;

    const mediaContent = (item as Record<string, unknown>)["media:content"] as { $?: { url?: string } } | undefined;
    const imageUrl = item.enclosure?.url ?? mediaContent?.["$"]?.url ?? null;

    const { error } = await supabase.from("articles").upsert(
      {
        title: item.title.trim(),
        url: item.link,
        description,
        image_url: imageUrl,
        source_name: source.name,
        source_region: source.region,
        source_country: source.country,
        category: source.category,
        published_at: pubDate.toISOString(),
      },
      { onConflict: "url", ignoreDuplicates: true }
    );

    if (!error) inserted++;
  }

  return inserted;
}

async function cleanupOldArticles(): Promise<number> {
  const cutoff = new Date(Date.now() - CLEANUP_MAX_AGE_MS).toISOString();
  const { count, error } = await supabase
    .from("articles")
    .delete({ count: "exact" })
    .lt("published_at", cutoff);
  if (error) console.warn("[sahafa] cleanup error:", error.message);
  return count ?? 0;
}

async function backfillSummaries(): Promise<void> {
  if (!anthropic) return;

  const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString();
  const { data } = await supabase
    .from("articles")
    .select("id, title, description")
    .is("summary", null)
    .gte("created_at", twoHoursAgo)
    .limit(20);

  if (!data?.length) return;

  await Promise.allSettled(
    data.map(async (article) => {
      const summary = await generateSummary(article.title, article.description);
      if (summary) {
        await supabase.from("articles").update({ summary }).eq("id", article.id);
      }
    })
  );
}

export async function fetchAllSources(): Promise<{
  total: number;
  deleted: number;
  bySource: Record<string, number>;
}> {
  // Clean up stale articles first
  const deleted = await cleanupOldArticles();

  const cutoff = new Date(Date.now() - INGEST_MAX_AGE_MS);
  const results = await Promise.allSettled(SOURCES.map((s) => fetchSource(s, cutoff)));

  const bySource: Record<string, number> = {};
  let total = 0;
  results.forEach((result, i) => {
    const count = result.status === "fulfilled" ? result.value : 0;
    bySource[SOURCES[i].name] = count;
    total += count;
  });

  await backfillSummaries();

  console.log(`[sahafa] +${total} articles, -${deleted} old articles`);
  return { total, deleted, bySource };
}
