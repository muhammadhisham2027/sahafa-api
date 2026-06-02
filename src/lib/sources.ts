export type Source = {
  name: string;
  url: string;
  region: string;
  country: string;
  category: string;
};

export const SOURCES: Source[] = [

  // ══════════════════════════════════════════════════════════
  // GLOBAL — US-based outlets with worldwide coverage
  // ══════════════════════════════════════════════════════════
  { name: "TechCrunch",        url: "https://techcrunch.com/feed/",                               region: "Global",       country: "United States", category: "Tech" },
  { name: "The Verge",         url: "https://www.theverge.com/rss/index.xml",                     region: "Global",       country: "United States", category: "Tech" },
  { name: "Wired",             url: "https://www.wired.com/feed/rss",                             region: "Global",       country: "United States", category: "Tech" },
  { name: "Ars Technica",      url: "https://feeds.arstechnica.com/arstechnica/index",            region: "Global",       country: "United States", category: "Tech" },
  { name: "MIT Tech Review",   url: "https://www.technologyreview.com/feed/",                    region: "Global",       country: "United States", category: "Tech" },
  { name: "VentureBeat",       url: "https://feeds.feedburner.com/venturebeat/SZYF",             region: "Global",       country: "United States", category: "Startups" },
  { name: "Rest of World",     url: "https://restofworld.org/feed/",                             region: "Global",       country: "United States", category: "Tech" },
  { name: "Hacker News",       url: "https://news.ycombinator.com/rss",                          region: "Global",       country: "United States", category: "Dev" },
  { name: "Dev.to",            url: "https://dev.to/feed",                                       region: "Global",       country: "United States", category: "Dev" },
  { name: "Product Hunt",      url: "https://www.producthunt.com/feed",                          region: "Global",       country: "United States", category: "Startups" },
  { name: "Reuters Tech",      url: "https://feeds.reuters.com/reuters/technologyNews",           region: "Global",       country: "United States", category: "Tech" },
  { name: "Engadget",          url: "https://www.engadget.com/rss.xml",                          region: "Global",       country: "United States", category: "Tech" },
  { name: "CNET",              url: "https://www.cnet.com/rss/news/",                            region: "Global",       country: "United States", category: "Tech" },
  { name: "ZDNet",             url: "https://www.zdnet.com/news/rss.xml",                        region: "Global",       country: "United States", category: "Tech" },
  { name: "Gizmodo",           url: "https://gizmodo.com/rss",                                   region: "Global",       country: "United States", category: "Tech" },
  { name: "Android Authority", url: "https://www.androidauthority.com/feed/",                   region: "Global",       country: "United States", category: "Tech" },
  { name: "9to5Google",        url: "https://9to5google.com/feed/",                              region: "Global",       country: "United States", category: "Tech" },
  { name: "9to5Mac",           url: "https://9to5mac.com/feed/",                                 region: "Global",       country: "United States", category: "Tech" },
  { name: "XDA Developers",    url: "https://www.xda-developers.com/feed/",                     region: "Global",       country: "United States", category: "Dev" },

  // ══════════════════════════════════════════════════════════
  // UNITED KINGDOM
  // ══════════════════════════════════════════════════════════
  { name: "BBC Technology",    url: "http://feeds.bbci.co.uk/news/technology/rss.xml",           region: "Europe",       country: "United Kingdom", category: "Tech" },
  { name: "The Guardian Tech", url: "https://www.theguardian.com/technology/rss",                region: "Europe",       country: "United Kingdom", category: "Tech" },
  { name: "The Register",      url: "https://www.theregister.com/headlines.atom",                region: "Europe",       country: "United Kingdom", category: "Tech" },
  { name: "TechRadar",         url: "https://www.techradar.com/rss",                             region: "Europe",       country: "United Kingdom", category: "Tech" },
  { name: "Sifted",            url: "https://sifted.eu/feed/",                                   region: "Europe",       country: "United Kingdom", category: "Startups" },

  // ══════════════════════════════════════════════════════════
  // EUROPE
  // ══════════════════════════════════════════════════════════

  // Germany
  { name: "Heise Online",      url: "https://www.heise.de/rss/heise.rdf",                       region: "Europe",       country: "Germany",        category: "Tech" },
  { name: "t3n",               url: "https://t3n.de/rss.xml",                                   region: "Europe",       country: "Germany",        category: "Tech" },
  { name: "EU-Startups",       url: "https://www.eu-startups.com/feed/",                        region: "Europe",       country: "Germany",        category: "Startups" },

  // France
  { name: "Numerama",          url: "https://www.numerama.com/feed/",                           region: "Europe",       country: "France",         category: "Tech" },
  { name: "01net",             url: "https://www.01net.com/rss/",                               region: "Europe",       country: "France",         category: "Tech" },
  { name: "FrAndroid",         url: "https://www.frandroid.com/feed",                           region: "Europe",       country: "France",         category: "Tech" },

  // Spain
  { name: "Xataka",            url: "https://www.xataka.com/index.xml",                         region: "Europe",       country: "Spain",          category: "Tech" },
  { name: "Hipertextual",      url: "https://hipertextual.com/feed",                            region: "Europe",       country: "Spain",          category: "Tech" },

  // Italy
  { name: "HDblog",            url: "https://www.hdblog.it/feed/",                              region: "Europe",       country: "Italy",          category: "Tech" },
  { name: "Punto Informatico",  url: "https://www.punto-informatico.it/feed/",                  region: "Europe",       country: "Italy",          category: "Tech" },

  // Netherlands
  { name: "Tweakers",          url: "https://tweakers.net/feeds/mixed.xml",                     region: "Europe",       country: "Netherlands",    category: "Tech" },
  { name: "Webwereld",         url: "https://webwereld.nl/rss",                                 region: "Europe",       country: "Netherlands",    category: "Tech" },

  // Sweden
  { name: "Breakit",           url: "https://www.breakit.se/feed/articles",                     region: "Europe",       country: "Sweden",         category: "Startups" },
  { name: "Computer Sweden",   url: "https://computersweden.idg.se/feed/",                      region: "Europe",       country: "Sweden",         category: "Tech" },

  // Norway
  { name: "Digi.no",           url: "https://www.digi.no/rss",                                  region: "Europe",       country: "Norway",         category: "Tech" },

  // Denmark
  { name: "Version2",          url: "https://www.version2.dk/rss",                              region: "Europe",       country: "Denmark",        category: "Tech" },

  // Finland
  { name: "Tivi",              url: "https://www.tivi.fi/feeds/latest.rss",                     region: "Europe",       country: "Finland",        category: "Tech" },

  // Poland
  { name: "Spider's Web",      url: "https://spidersweb.pl/feed",                               region: "Europe",       country: "Poland",         category: "Tech" },
  { name: "Antyweb",           url: "https://antyweb.pl/feed",                                  region: "Europe",       country: "Poland",         category: "Tech" },

  // Czech Republic
  { name: "Lupa.cz",           url: "https://www.lupa.cz/rss/clanky/",                          region: "Europe",       country: "Czech Republic", category: "Tech" },

  // Romania
  { name: "Go4IT",             url: "https://www.go4it.ro/feed/",                               region: "Europe",       country: "Romania",        category: "Tech" },

  // Portugal
  { name: "Exameinformatica",  url: "https://exameinformatica.iol.pt/rss/index.xml",            region: "Europe",       country: "Portugal",       category: "Tech" },

  // Belgium
  { name: "DataNews",          url: "https://datanews.knack.be/rss/",                           region: "Europe",       country: "Belgium",        category: "Tech" },
  { name: "Tech.eu",           url: "https://tech.eu/feed/",                                    region: "Europe",       country: "Belgium",        category: "Startups" },

  // Switzerland
  { name: "Inside IT",         url: "https://www.inside-it.ch/rss/allnews.xml",                 region: "Europe",       country: "Switzerland",    category: "Tech" },

  // Austria
  { name: "Futurezone.at",     url: "https://futurezone.at/xml/rss",                            region: "Europe",       country: "Austria",        category: "Tech" },

  // Ireland
  { name: "Silicon Republic",  url: "https://www.siliconrepublic.com/feed/",                    region: "Europe",       country: "Ireland",        category: "Tech" },

  // Ukraine
  { name: "AIN.UA",            url: "https://ain.ua/feed/",                                     region: "Europe",       country: "Ukraine",        category: "Startups" },

  // Russia
  { name: "Habr",              url: "https://habr.com/ru/rss/hubs/all/",                        region: "Europe",       country: "Russia",         category: "Dev" },
  { name: "vc.ru",             url: "https://vc.ru/rss",                                        region: "Europe",       country: "Russia",         category: "Startups" },

  // Greece
  { name: "TechGear.gr",       url: "https://www.techgear.gr/feed/",                            region: "Europe",       country: "Greece",         category: "Tech" },

  // Hungary
  { name: "Prohardver",        url: "https://prohardver.hu/xml/",                               region: "Europe",       country: "Hungary",        category: "Tech" },

  // Serbia
  { name: "PC Press",          url: "https://pcpress.rs/feed/",                                 region: "Europe",       country: "Serbia",         category: "Tech" },

  // Bulgaria
  { name: "HiComm",            url: "https://hicomm.bg/rss",                                    region: "Europe",       country: "Bulgaria",       category: "Tech" },

  // Croatia
  { name: "Bug.hr",            url: "https://www.bug.hr/rss/",                                  region: "Europe",       country: "Croatia",        category: "Tech" },

  // Slovakia
  { name: "Živé.sk",           url: "https://zive.aktuality.sk/rss/",                           region: "Europe",       country: "Slovakia",       category: "Tech" },

  // Lithuania
  { name: "Delfi Tech",        url: "https://www.delfi.lt/rss/feeds/techno.xml",                region: "Europe",       country: "Lithuania",      category: "Tech" },

  // Estonia
  { name: "Geenius.ee",        url: "https://geenius.ee/feed/",                                 region: "Europe",       country: "Estonia",        category: "Tech" },

  // Latvia
  { name: "Delfi Tech LV",     url: "https://www.delfi.lv/rss/feeds/technika.xml",              region: "Europe",       country: "Latvia",         category: "Tech" },

  // ══════════════════════════════════════════════════════════
  // MENA — Egypt (existing)
  // ══════════════════════════════════════════════════════════
  { name: "Tech7awi",          url: "https://tech7awi.com/feed/",                               region: "Egypt",        country: "Egypt",          category: "Tech" },
  { name: "Egypt Today Tech",  url: "https://www.egypttoday.com/taxonomy/term/26/feed",         region: "Egypt",        country: "Egypt",          category: "Tech" },
  { name: "Sarmady",           url: "https://www.masrawy.com/news/rss.aspx",                    region: "Egypt",        country: "Egypt",          category: "Tech" },

  // ══════════════════════════════════════════════════════════
  // MENA — Saudi Arabia (existing)
  // ══════════════════════════════════════════════════════════
  { name: "Arab News Tech",    url: "https://www.arabnews.com/taxonomy/term/7936/feed",         region: "Saudi Arabia", country: "Saudi Arabia",   category: "Tech" },
  { name: "Saudi Gazette",     url: "https://saudigazette.com.sa/rss/tech",                    region: "Saudi Arabia", country: "Saudi Arabia",   category: "Tech" },
  { name: "Argaam",            url: "https://www.argaam.com/ar/rss/latest",                    region: "Saudi Arabia", country: "Saudi Arabia",   category: "Tech" },

  // ══════════════════════════════════════════════════════════
  // MENA — Rest of region
  // ══════════════════════════════════════════════════════════
  { name: "MENAbytes",         url: "https://www.menabytes.com/feed/",                          region: "MENA",         country: "UAE",            category: "Startups" },
  { name: "Wamda",             url: "https://www.wamda.com/feed",                               region: "MENA",         country: "UAE",            category: "Startups" },
  { name: "Startup Scene ME",  url: "https://startupsceneme.com/feed/",                        region: "MENA",         country: "UAE",            category: "Startups" },
  { name: "Entrepreneur ME",   url: "https://www.entrepreneurmiddleeast.com/feed/",             region: "MENA",         country: "UAE",            category: "Startups" },
  { name: "ArabNet",           url: "https://www.arabnet.me/feed",                             region: "MENA",         country: "Lebanon",        category: "Tech" },
  { name: "Al Bawaba Tech",    url: "https://www.albawaba.com/taxonomy/term/172/feed",          region: "MENA",         country: "Jordan",         category: "Tech" },
  { name: "Geektime",          url: "https://www.geektime.com/feed/",                           region: "MENA",         country: "Israel",         category: "Startups" },
  { name: "CTech",             url: "https://www.calcalistech.com/ctech/rss",                   region: "MENA",         country: "Israel",         category: "Tech" },
  { name: "Technopat",         url: "https://www.technopat.net/feed/",                          region: "MENA",         country: "Turkey",         category: "Tech" },
  { name: "WebTekno",          url: "https://www.webtekno.com/rss.xml",                         region: "MENA",         country: "Turkey",         category: "Tech" },
  { name: "ZoomIT",            url: "https://www.zoomit.ir/rss",                                region: "MENA",         country: "Iran",           category: "Tech" },
  { name: "Arabian Business",  url: "https://www.arabianbusiness.com/rss",                      region: "MENA",         country: "UAE",            category: "Tech" },
  { name: "Gulf News Tech",    url: "https://gulfnews.com/rss/technology",                      region: "MENA",         country: "UAE",            category: "Tech" },
  { name: "Hespress",          url: "https://hespress.com/feed/",                               region: "MENA",         country: "Morocco",        category: "Tech" },
  { name: "Medias24 Tech",     url: "https://medias24.com/feed/",                               region: "MENA",         country: "Morocco",        category: "Tech" },
  { name: "Tunisie Numerique", url: "https://www.tunisienumerique.com/feed/",                   region: "MENA",         country: "Tunisia",        category: "Tech" },
  { name: "Dzair Daily Tech",  url: "https://www.dzairdaily.com/feed/",                         region: "MENA",         country: "Algeria",        category: "Tech" },
  { name: "Jordan Times Tech", url: "https://www.jordantimes.com/rss/feeds/technology",         region: "MENA",         country: "Jordan",         category: "Tech" },
  { name: "L'Orient Today",    url: "https://www.lorientlejour.com/rss",                        region: "MENA",         country: "Lebanon",        category: "Tech" },
  { name: "Qatar Tribune Tech",url: "https://www.qatar-tribune.com/rss",                        region: "MENA",         country: "Qatar",          category: "Tech" },

  // ══════════════════════════════════════════════════════════
  // AFRICA
  // ══════════════════════════════════════════════════════════
  { name: "TechCabal",         url: "https://techcabal.com/feed/",                             region: "Africa",       country: "Nigeria",        category: "Tech" },
  { name: "Techpoint Africa",  url: "https://techpoint.africa/feed/",                          region: "Africa",       country: "Nigeria",        category: "Tech" },
  { name: "Disrupt Africa",    url: "https://disrupt-africa.com/feed/",                        region: "Africa",       country: "South Africa",   category: "Startups" },
  { name: "MyBroadband",       url: "https://mybroadband.co.za/news/feed",                     region: "Africa",       country: "South Africa",   category: "Tech" },
  { name: "TechCentral",       url: "https://techcentral.co.za/feed/",                         region: "Africa",       country: "South Africa",   category: "Tech" },
  { name: "Techweez",          url: "https://techweez.com/feed/",                              region: "Africa",       country: "Kenya",          category: "Tech" },
  { name: "TechMoran",         url: "https://techmoran.com/feed/",                             region: "Africa",       country: "Kenya",          category: "Startups" },
  { name: "Techgh24",          url: "https://techgh24.com/feed/",                              region: "Africa",       country: "Ghana",          category: "Tech" },
  { name: "GhanaWeb Tech",     url: "https://www.ghanaweb.com/GhanaHomePage/technology/index.rss", region: "Africa",   country: "Ghana",          category: "Tech" },
  { name: "Techinghana",       url: "https://www.techinghana.com/feed/",                       region: "Africa",       country: "Ghana",          category: "Tech" },
  { name: "PC Tech Magazine",  url: "https://pctechmag.com/feed/",                             region: "Africa",       country: "Uganda",         category: "Tech" },
  { name: "Dignited",          url: "https://www.dignited.com/feed/",                           region: "Africa",       country: "Uganda",         category: "Tech" },
  { name: "TechTrends.co.tz",  url: "https://www.techtrends.co.tz/feed/",                      region: "Africa",       country: "Tanzania",       category: "Tech" },
  { name: "KT Press",          url: "https://ktpress.rw/feed/",                                region: "Africa",       country: "Rwanda",         category: "Tech" },
  { name: "iAfrikan",          url: "https://www.iafrikan.com/feed/",                           region: "Africa",       country: "South Africa",   category: "Tech" },
  { name: "Pulse Ethiopia Tech",url: "https://pulse.com.gh/technology/feed",                    region: "Africa",       country: "Ethiopia",       category: "Tech" },
  { name: "CIO Africa",        url: "https://cioafrica.co/feed/",                               region: "Africa",       country: "Kenya",          category: "Tech" },
  { name: "BitKE",             url: "https://bitke.org/feed/",                                  region: "Africa",       country: "Kenya",          category: "Tech" },
  { name: "TechZim",           url: "https://www.techzim.co.zw/feed/",                          region: "Africa",       country: "Zimbabwe",       category: "Tech" },
  { name: "Zambia ICT",        url: "https://www.zambiact.com/feed/",                           region: "Africa",       country: "Zambia",         category: "Tech" },
  { name: "Woza Online",       url: "https://wozaonline.co.mw/feed/",                           region: "Africa",       country: "Malawi",         category: "Tech" },
  { name: "Digital Senegal",   url: "https://www.senxibar.com/feed/",                           region: "Africa",       country: "Senegal",        category: "Tech" },
  { name: "L'Officiel Africa", url: "https://www.lofficiel.ci/feed",                            region: "Africa",       country: "Côte d'Ivoire",  category: "Tech" },
  { name: "Cameroon Tribune Tech", url: "https://www.cameroon-tribune.cm/rss",                  region: "Africa",       country: "Cameroon",       category: "Tech" },

  // ══════════════════════════════════════════════════════════
  // ASIA
  // ══════════════════════════════════════════════════════════

  // India (existing + more)
  { name: "Inc42",             url: "https://inc42.com/feed/",                                  region: "Asia",         country: "India",          category: "Startups" },
  { name: "YourStory",         url: "https://yourstory.com/feed/",                              region: "Asia",         country: "India",          category: "Startups" },
  { name: "NDTV Gadgets",      url: "https://gadgets.ndtv.com/rss/feeds",                       region: "Asia",         country: "India",          category: "Tech" },
  { name: "Gadgets360",        url: "https://feeds.feedburner.com/NDTV-Gadgets360-Latest",      region: "Asia",         country: "India",          category: "Tech" },

  // China
  { name: "TechNode",          url: "https://technode.com/feed/",                               region: "Asia",         country: "China",          category: "Tech" },
  { name: "36Kr",              url: "https://36kr.com/feed",                                    region: "Asia",         country: "China",          category: "Startups" },
  { name: "Caixin Tech",       url: "https://www.caixinglobal.com/rss/technology.xml",           region: "Asia",         country: "China",          category: "Tech" },

  // Japan
  { name: "Gizmodo Japan",     url: "https://www.gizmodo.jp/index.xml",                         region: "Asia",         country: "Japan",          category: "Tech" },
  { name: "Impress Watch",     url: "https://pc.watch.impress.co.jp/rss/all.rdf",               region: "Asia",         country: "Japan",          category: "Tech" },
  { name: "ITmedia Japan",     url: "https://rss.itmedia.co.jp/rss/2.0/itmedia_all.xml",        region: "Asia",         country: "Japan",          category: "Tech" },

  // South Korea
  { name: "ZDNet Korea",       url: "https://zdnet.co.kr/rss/",                                 region: "Asia",         country: "South Korea",    category: "Tech" },
  { name: "Bloter",            url: "https://www.bloter.net/feed/",                             region: "Asia",         country: "South Korea",    category: "Tech" },

  // Singapore
  { name: "e27",               url: "https://e27.co/feed/",                                     region: "Asia",         country: "Singapore",      category: "Startups" },
  { name: "KrASIA",            url: "https://kr-asia.com/feed",                                 region: "Asia",         country: "Singapore",      category: "Tech" },
  { name: "Tech In Asia",      url: "https://www.techinasia.com/feed",                          region: "Asia",         country: "Singapore",      category: "Startups" },

  // Indonesia
  { name: "Tekno Kompas",      url: "https://tekno.kompas.com/rss/headline.xml",                region: "Asia",         country: "Indonesia",      category: "Tech" },
  { name: "DailySocial",       url: "https://dailysocial.id/feed",                              region: "Asia",         country: "Indonesia",      category: "Startups" },

  // Malaysia
  { name: "Amanz",             url: "https://amanz.my/feed",                                    region: "Asia",         country: "Malaysia",       category: "Tech" },
  { name: "SoyaCincau",        url: "https://www.soyacincau.com/feed/",                         region: "Asia",         country: "Malaysia",       category: "Tech" },

  // Philippines
  { name: "YugaTech",          url: "https://www.yugatech.com/feed/",                           region: "Asia",         country: "Philippines",    category: "Tech" },
  { name: "Unbox.ph",          url: "https://unbox.ph/feed/",                                   region: "Asia",         country: "Philippines",    category: "Tech" },

  // Thailand
  { name: "Techsauce",         url: "https://techsauce.co/feed",                                region: "Asia",         country: "Thailand",       category: "Startups" },
  { name: "Blognone",          url: "https://www.blognone.com/feed",                            region: "Asia",         country: "Thailand",       category: "Tech" },

  // Vietnam
  { name: "VnExpress Tech",    url: "https://e.vnexpress.net/rss/tech.rss",                     region: "Asia",         country: "Vietnam",        category: "Tech" },
  { name: "Nhân Dân Tech",     url: "https://en.nhandan.vn/rss/tech.rss",                       region: "Asia",         country: "Vietnam",        category: "Tech" },

  // Pakistan
  { name: "ProPakistani",      url: "https://propakistani.pk/feed/",                            region: "Asia",         country: "Pakistan",       category: "Tech" },
  { name: "TechJuice",         url: "https://www.techjuice.pk/feed/",                           region: "Asia",         country: "Pakistan",       category: "Tech" },

  // Bangladesh
  { name: "TechShohor",        url: "https://www.techshohor.com/feed/",                         region: "Asia",         country: "Bangladesh",     category: "Tech" },
  { name: "Future Startup BD", url: "https://futurestartup.com/feed/",                          region: "Asia",         country: "Bangladesh",     category: "Startups" },

  // Taiwan
  { name: "iThome",            url: "https://www.ithome.com.tw/rss",                            region: "Asia",         country: "Taiwan",         category: "Tech" },
  { name: "INSIDE 硬塞的",      url: "https://www.inside.com.tw/rss",                            region: "Asia",         country: "Taiwan",         category: "Tech" },

  // Sri Lanka
  { name: "Roar.lk Tech",      url: "https://roar.lk/technology/feed/",                         region: "Asia",         country: "Sri Lanka",      category: "Tech" },

  // Nepal
  { name: "TechLekh",          url: "https://techlekh.com/feed/",                               region: "Asia",         country: "Nepal",          category: "Tech" },

  // Kazakhstan
  { name: "Profit.kz",         url: "https://profit.kz/rss/news",                               region: "Asia",         country: "Kazakhstan",     category: "Tech" },

  // Azerbaijan
  { name: "ICTnews.az",        url: "https://ictnews.az/rss/",                                  region: "Asia",         country: "Azerbaijan",     category: "Tech" },

  // Myanmar
  { name: "Myanmar Tech",      url: "https://www.mmtimes.com/technology.rss",                   region: "Asia",         country: "Myanmar",        category: "Tech" },

  // Cambodia
  { name: "Khmer Times Tech",  url: "https://www.khmertimeskh.com/category/tech/feed/",         region: "Asia",         country: "Cambodia",       category: "Tech" },

  // Mongolia
  { name: "Montsame Tech",     url: "https://montsame.mn/en/feed/",                             region: "Asia",         country: "Mongolia",       category: "Tech" },

  // ══════════════════════════════════════════════════════════
  // AMERICAS
  // ══════════════════════════════════════════════════════════

  // Canada
  { name: "MobileSyrup",       url: "https://mobilesyrup.com/feed",                             region: "Americas",     country: "Canada",         category: "Tech" },
  { name: "BetaKit",           url: "https://betakit.com/feed/",                                region: "Americas",     country: "Canada",         category: "Startups" },

  // Mexico
  { name: "Expansión Tech",    url: "https://expansion.mx/rss?section=tecnologia",              region: "Americas",     country: "Mexico",         category: "Tech" },
  { name: "El Economista Tech",url: "https://www.eleconomista.com.mx/rss/tech.xml",             region: "Americas",     country: "Mexico",         category: "Tech" },

  // Brazil
  { name: "Olhar Digital",     url: "https://olhardigital.com.br/feed/",                        region: "Americas",     country: "Brazil",         category: "Tech" },
  { name: "TecMundo",          url: "https://rss.tecmundo.com.br/feed",                         region: "Americas",     country: "Brazil",         category: "Tech" },
  { name: "Startups.com.br",   url: "https://startups.com.br/feed/",                            region: "Americas",     country: "Brazil",         category: "Startups" },

  // Argentina
  { name: "FayerWayer",        url: "https://www.fayerwayer.com/feed/",                         region: "Americas",     country: "Argentina",      category: "Tech" },
  { name: "TN Tecnología",     url: "https://tn.com.ar/feeds/tecnologia.rss",                   region: "Americas",     country: "Argentina",      category: "Tech" },

  // Chile
  { name: "Emol Tecnología",   url: "https://www.emol.com/especiales/rss/tecnologia.xml",       region: "Americas",     country: "Chile",          category: "Tech" },
  { name: "Tele 13 Tech",      url: "https://www.t13.cl/rss/tecnologia",                        region: "Americas",     country: "Chile",          category: "Tech" },

  // Colombia
  { name: "Enter.co",          url: "https://enter.co/feed/",                                   region: "Americas",     country: "Colombia",       category: "Tech" },
  { name: "Colombia Digital",  url: "https://colombiadigital.net/feed",                         region: "Americas",     country: "Colombia",       category: "Tech" },

  // Peru
  { name: "RPP Tecnología",    url: "https://rpp.pe/campana/tecnologia/rss",                    region: "Americas",     country: "Peru",           category: "Tech" },

  // Venezuela
  { name: "NotiTotal Tech",    url: "https://noticias.canal-i.com.ve/tecnologia/feed/",         region: "Americas",     country: "Venezuela",      category: "Tech" },

  // Ecuador
  { name: "TeleAmazonas Tech", url: "https://www.teleamazonas.com/feed/",                       region: "Americas",     country: "Ecuador",        category: "Tech" },

  // Costa Rica
  { name: "CRHoy Tecnología",  url: "https://www.crhoy.com/rss/tech/",                          region: "Americas",     country: "Costa Rica",     category: "Tech" },

  // Guatemala
  { name: "Prensa Libre Tech", url: "https://www.prensalibre.com/rss/tecnologia.xml",           region: "Americas",     country: "Guatemala",      category: "Tech" },

  // Dominican Republic
  { name: "El Caribe Tech",    url: "https://www.elcaribe.com.do/rss/tecnologia.xml",           region: "Americas",     country: "Dominican Republic", category: "Tech" },

  // ══════════════════════════════════════════════════════════
  // OCEANIA
  // ══════════════════════════════════════════════════════════
  { name: "Gizmodo Australia", url: "https://www.gizmodo.com.au/feed/",                         region: "Oceania",      country: "Australia",      category: "Tech" },
  { name: "ARNnet",            url: "https://www.arnnet.com.au/index.rss",                      region: "Oceania",      country: "Australia",      category: "Tech" },
  { name: "Delimiter",         url: "https://delimiter.com.au/feed/",                           region: "Oceania",      country: "Australia",      category: "Tech" },
  { name: "Reseller News NZ",  url: "https://www.resellernews.co.nz/rss/news.xml",              region: "Oceania",      country: "New Zealand",    category: "Tech" },
  { name: "Stuff Technology",  url: "https://www.stuff.co.nz/technology/rss",                   region: "Oceania",      country: "New Zealand",    category: "Tech" },
];
