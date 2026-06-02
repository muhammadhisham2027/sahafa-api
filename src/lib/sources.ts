export type Source = {
  name: string;
  url: string;
  region: string;
  category: string;
};

export const SOURCES: Source[] = [
  // ── Global ──────────────────────────────────────────────
  { name: "TechCrunch",        url: "https://techcrunch.com/feed/",                               region: "Global",       category: "Tech" },
  { name: "The Verge",         url: "https://www.theverge.com/rss/index.xml",                     region: "Global",       category: "Tech" },
  { name: "Wired",             url: "https://www.wired.com/feed/rss",                             region: "Global",       category: "Tech" },
  { name: "Ars Technica",      url: "https://feeds.arstechnica.com/arstechnica/index",            region: "Global",       category: "Tech" },
  { name: "MIT Tech Review",   url: "https://www.technologyreview.com/feed/",                    region: "Global",       category: "Tech" },
  { name: "VentureBeat",       url: "https://feeds.feedburner.com/venturebeat/SZYF",             region: "Global",       category: "Startups" },
  { name: "Rest of World",     url: "https://restofworld.org/feed/",                             region: "Global",       category: "Tech" },
  { name: "Hacker News",       url: "https://news.ycombinator.com/rss",                          region: "Global",       category: "Dev" },
  { name: "Dev.to",            url: "https://dev.to/feed",                                       region: "Global",       category: "Dev" },
  { name: "Product Hunt",      url: "https://www.producthunt.com/feed",                          region: "Global",       category: "Startups" },
  { name: "BBC Technology",    url: "http://feeds.bbci.co.uk/news/technology/rss.xml",           region: "Global",       category: "Tech" },
  { name: "Reuters Tech",      url: "https://feeds.reuters.com/reuters/technologyNews",           region: "Global",       category: "Tech" },
  { name: "The Guardian Tech", url: "https://www.theguardian.com/technology/rss",                region: "Global",       category: "Tech" },
  { name: "Engadget",          url: "https://www.engadget.com/rss.xml",                          region: "Global",       category: "Tech" },
  { name: "CNET",              url: "https://www.cnet.com/rss/news/",                            region: "Global",       category: "Tech" },
  { name: "ZDNet",             url: "https://www.zdnet.com/news/rss.xml",                        region: "Global",       category: "Tech" },
  { name: "The Register",      url: "https://www.theregister.com/headlines.atom",                region: "Global",       category: "Tech" },
  { name: "Gizmodo",           url: "https://gizmodo.com/rss",                                   region: "Global",       category: "Tech" },
  { name: "TechRadar",         url: "https://www.techradar.com/rss",                             region: "Global",       category: "Tech" },
  { name: "Android Authority", url: "https://www.androidauthority.com/feed/",                   region: "Global",       category: "Tech" },
  { name: "9to5Google",        url: "https://9to5google.com/feed/",                              region: "Global",       category: "Tech" },
  { name: "9to5Mac",           url: "https://9to5mac.com/feed/",                                 region: "Global",       category: "Tech" },
  { name: "XDA Developers",    url: "https://www.xda-developers.com/feed/",                     region: "Global",       category: "Dev" },

  // ── MENA / Arab World ────────────────────────────────────
  { name: "MENAbytes",         url: "https://www.menabytes.com/feed/",                           region: "MENA",         category: "Startups" },
  { name: "ArabNet",           url: "https://www.arabnet.me/feed",                              region: "MENA",         category: "Tech" },
  { name: "Wamda",             url: "https://www.wamda.com/feed",                                region: "MENA",         category: "Startups" },
  { name: "Startup Scene ME",  url: "https://startupsceneme.com/feed/",                         region: "MENA",         category: "Startups" },
  { name: "Entrepreneur ME",   url: "https://www.entrepreneurmiddleeast.com/feed/",              region: "MENA",         category: "Startups" },
  { name: "Al Bawaba Tech",    url: "https://www.albawaba.com/taxonomy/term/172/feed",           region: "MENA",         category: "Tech" },

  // ── Egypt ────────────────────────────────────────────────
  { name: "Tech7awi",          url: "https://tech7awi.com/feed/",                               region: "Egypt",        category: "Tech" },
  { name: "Egypt Today Tech",  url: "https://www.egypttoday.com/taxonomy/term/26/feed",         region: "Egypt",        category: "Tech" },
  { name: "Sarmady",           url: "https://www.masrawy.com/news/rss.aspx",                    region: "Egypt",        category: "Tech" },

  // ── Saudi Arabia ─────────────────────────────────────────
  { name: "Arab News Tech",    url: "https://www.arabnews.com/taxonomy/term/7936/feed",         region: "Saudi Arabia", category: "Tech" },
  { name: "Saudi Gazette",     url: "https://saudigazette.com.sa/rss/tech",                    region: "Saudi Arabia", category: "Tech" },
  { name: "Argaam",            url: "https://www.argaam.com/ar/rss/latest",                    region: "Saudi Arabia", category: "Tech" },

  // ── Europe ───────────────────────────────────────────────
  { name: "Sifted",            url: "https://sifted.eu/feed/",                                 region: "Europe",       category: "Startups" },
  { name: "Tech.eu",           url: "https://tech.eu/feed/",                                   region: "Europe",       category: "Tech" },
  { name: "EU-Startups",       url: "https://www.eu-startups.com/feed/",                       region: "Europe",       category: "Startups" },
  { name: "Silicon Republic",  url: "https://www.siliconrepublic.com/feed/",                   region: "Europe",       category: "Tech" },

  // ── Africa ───────────────────────────────────────────────
  { name: "TechCabal",         url: "https://techcabal.com/feed/",                             region: "Africa",       category: "Tech" },
  { name: "Disrupt Africa",    url: "https://disrupt-africa.com/feed/",                        region: "Africa",       category: "Startups" },
  { name: "Techpoint Africa",  url: "https://techpoint.africa/feed/",                          region: "Africa",       category: "Tech" },

  // ── Asia ─────────────────────────────────────────────────
  { name: "TechNode",          url: "https://technode.com/feed/",                              region: "Asia",         category: "Tech" },
  { name: "KrASIA",            url: "https://kr-asia.com/feed",                                region: "Asia",         category: "Tech" },
  { name: "e27",               url: "https://e27.co/feed/",                                    region: "Asia",         category: "Startups" },
  { name: "Inc42",             url: "https://inc42.com/feed/",                                 region: "Asia",         category: "Startups" },
  { name: "YourStory",         url: "https://yourstory.com/feed/",                             region: "Asia",         category: "Startups" },
];
