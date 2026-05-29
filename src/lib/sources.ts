export type Source = {
  name: string;
  url: string;
  region: string;
  category: string;
};

export const SOURCES: Source[] = [
  // ── Global ──────────────────────────────────────────────
  { name: "TechCrunch",       url: "https://techcrunch.com/feed/",                              region: "Global",       category: "Tech" },
  { name: "The Verge",        url: "https://www.theverge.com/rss/index.xml",                    region: "Global",       category: "Tech" },
  { name: "Wired",            url: "https://www.wired.com/feed/rss",                            region: "Global",       category: "Tech" },
  { name: "Ars Technica",     url: "https://feeds.arstechnica.com/arstechnica/index",           region: "Global",       category: "Tech" },
  { name: "Hacker News",      url: "https://news.ycombinator.com/rss",                         region: "Global",       category: "Dev" },
  { name: "MIT Tech Review",  url: "https://www.technologyreview.com/feed/",                   region: "Global",       category: "Tech" },
  { name: "VentureBeat",      url: "https://feeds.feedburner.com/venturebeat/SZYF",            region: "Global",       category: "Startups" },
  { name: "Dev.to",           url: "https://dev.to/feed",                                      region: "Global",       category: "Dev" },
  { name: "Product Hunt",     url: "https://www.producthunt.com/feed",                         region: "Global",       category: "Startups" },
  { name: "Rest of World",    url: "https://restofworld.org/feed/",                            region: "Global",       category: "Tech" },

  // ── MENA / Arab World ────────────────────────────────────
  { name: "MENAbytes",        url: "https://www.menabytes.com/feed/",                          region: "MENA",         category: "Startups" },
  { name: "Wamda",            url: "https://www.wamda.com/feed",                               region: "MENA",         category: "Startups" },
  { name: "Al Bawaba Tech",   url: "https://www.albawaba.com/taxonomy/term/172/feed",          region: "MENA",         category: "Tech" },
  { name: "Startup Scene ME", url: "https://startupsceneme.com/feed/",                        region: "MENA",         category: "Startups" },
  { name: "ArabNet",          url: "https://www.arabnet.me/feed",                             region: "MENA",         category: "Tech" },
  { name: "Entrepreneur ME",  url: "https://www.entrepreneurmiddleeast.com/feed/",             region: "MENA",         category: "Startups" },

  // ── Egypt ────────────────────────────────────────────────
  { name: "Tech7awi",         url: "https://tech7awi.com/feed/",                              region: "Egypt",        category: "Tech" },
  { name: "Egypt Today Tech", url: "https://www.egypttoday.com/taxonomy/term/26/feed",        region: "Egypt",        category: "Tech" },
  { name: "Sarmady",          url: "https://www.masrawy.com/news/rss.aspx",                   region: "Egypt",        category: "Tech" },

  // ── Saudi Arabia ─────────────────────────────────────────
  { name: "Arab News Tech",   url: "https://www.arabnews.com/taxonomy/term/7936/feed",        region: "Saudi Arabia", category: "Tech" },
  { name: "Saudi Gazette",    url: "https://saudigazette.com.sa/rss/tech",                   region: "Saudi Arabia", category: "Tech" },
  { name: "Argaam",           url: "https://www.argaam.com/ar/rss/latest",                   region: "Saudi Arabia", category: "Tech" },

  // ── Europe ───────────────────────────────────────────────
  { name: "Sifted",           url: "https://sifted.eu/feed/",                                region: "Europe",       category: "Startups" },
  { name: "Tech.eu",          url: "https://tech.eu/feed/",                                  region: "Europe",       category: "Tech" },

  // ── Africa ───────────────────────────────────────────────
  { name: "TechCabal",        url: "https://techcabal.com/feed/",                            region: "Africa",       category: "Tech" },
  { name: "Disrupt Africa",   url: "https://disrupt-africa.com/feed/",                       region: "Africa",       category: "Startups" },

  // ── Asia ─────────────────────────────────────────────────
  { name: "KrASIA",           url: "https://kr-asia.com/feed",                               region: "Asia",         category: "Tech" },
  { name: "TechNode",         url: "https://technode.com/feed/",                             region: "Asia",         category: "Tech" },
];
