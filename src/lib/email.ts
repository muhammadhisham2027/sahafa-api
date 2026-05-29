import { Resend } from "resend";
import { supabase, type Article } from "./supabase";
import { format } from "date-fns";

const resend = new Resend(process.env.RESEND_API_KEY);

function buildEmailHtml(articles: Article[], date: string): string {
  const grouped: Record<string, Article[]> = {};
  for (const a of articles) {
    if (!grouped[a.category]) grouped[a.category] = [];
    grouped[a.category].push(a);
  }

  const sections = Object.entries(grouped)
    .map(([category, items]) => `
      <h2 style="color:#1a1a1a;font-size:18px;margin:32px 0 12px;border-bottom:2px solid #f0f0f0;padding-bottom:8px;">${category}</h2>
      ${items.slice(0, 5).map((a) => `
        <div style="margin-bottom:20px;">
          <a href="${a.url}" style="color:#1a1a1a;font-size:15px;font-weight:600;text-decoration:none;line-height:1.4;">${a.title}</a>
          ${a.description ? `<p style="color:#555;font-size:13px;margin:4px 0 0;line-height:1.5;">${a.description.slice(0, 160)}…</p>` : ""}
          <p style="color:#999;font-size:12px;margin:4px 0 0;">${a.source_name} · ${a.source_region}</p>
        </div>
      `).join("")}
    `).join("");

  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
    <body style="margin:0;padding:0;background:#f9f9f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
      <div style="max-width:600px;margin:0 auto;background:#fff;padding:40px 32px;">
        <div style="margin-bottom:32px;">
          <h1 style="color:#1a1a1a;font-size:26px;margin:0 0 4px;">صحافة · Sahafa</h1>
          <p style="color:#999;font-size:13px;margin:0;">Your daily tech briefing · ${date}</p>
        </div>
        ${sections}
        <div style="margin-top:40px;padding-top:24px;border-top:1px solid #f0f0f0;text-align:center;">
          <p style="color:#bbb;font-size:12px;">You're receiving this because you subscribed to Sahafa.<br>
          <a href="{{unsubscribe_url}}" style="color:#bbb;">Unsubscribe</a></p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function sendNewsletter(): Promise<{ sent: number; skipped: number }> {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .gte("published_at", yesterday.toISOString())
    .order("published_at", { ascending: false })
    .limit(50);

  if (!articles || articles.length === 0) return { sent: 0, skipped: 0 };

  const { data: subscribers } = await supabase
    .from("subscribers")
    .select("email")
    .eq("active", true);

  if (!subscribers || subscribers.length === 0) return { sent: 0, skipped: 0 };

  const dateStr = format(new Date(), "MMMM d, yyyy");
  const html = buildEmailHtml(articles, dateStr);

  const { error } = await resend.emails.send({
    from: "Sahafa <newsletter@sahafa.io>",
    to: subscribers.map((s) => s.email),
    subject: `Sahafa · Tech Briefing — ${dateStr}`,
    html,
  });

  if (error) {
    console.error("[sahafa] email send failed:", error);
    return { sent: 0, skipped: subscribers.length };
  }

  return { sent: subscribers.length, skipped: 0 };
}
