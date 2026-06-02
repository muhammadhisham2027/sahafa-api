"use client";

import { useState } from "react";

const FEATURES = [
  {
    icon: "🌍",
    title: "Every corner of the world",
    desc: "130+ sources across 80+ countries — from Egypt and Saudi Arabia to Japan, Brazil, Nigeria, and beyond.",
  },
  {
    icon: "📱",
    title: "Android app",
    desc: "Filter by region or country, search, bookmark, and read offline. No account required.",
  },
  {
    icon: "✉️",
    title: "Daily newsletter",
    desc: "The best tech stories from around the world, delivered to your inbox every morning.",
  },
  {
    icon: "🤖",
    title: "AI summaries",
    desc: "Every article gets a one-line AI summary so you can decide what's worth reading.",
  },
  {
    icon: "🔔",
    title: "Daily digest notification",
    desc: "A morning push notification with the top stories — no noise, just signal.",
  },
  {
    icon: "📡",
    title: "Works offline",
    desc: "Your last feed is cached locally. Read on the go even without a connection.",
  },
];

const REGIONS = [
  { label: "Global", sources: 20, color: "#6366f1" },
  { label: "MENA", sources: 18, color: "#f59e0b" },
  { label: "Africa", sources: 22, color: "#10b981" },
  { label: "Asia", sources: 30, color: "#ef4444" },
  { label: "Europe", sources: 24, color: "#3b82f6" },
  { label: "Americas", sources: 18, color: "#8b5cf6" },
  { label: "Oceania", sources: 4, color: "#06b6d4" },
];

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">

      {/* Nav */}
      <nav className="border-b border-white/[0.06] px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-bold tracking-tight">صحافة</span>
            <span className="text-sm text-white/40 font-medium">Sahafa</span>
          </div>
          <a
            href="https://github.com/muhammadhisham2027/sahafa-app/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold bg-white text-black px-4 py-2 rounded-full hover:bg-white/90 transition-colors"
          >
            Download APK
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] text-white/60 text-xs font-medium px-3 py-1.5 rounded-full mb-8 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
          Free · Open source · No account needed
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold leading-[1.08] tracking-tight mb-6">
          Tech news from<br />
          <span className="text-white/30">everywhere.</span>
        </h1>

        <p className="text-lg text-white/50 max-w-xl mx-auto mb-12 leading-relaxed">
          One app for global and regional tech — 130+ sources across 80+ countries,
          from Cairo to Tokyo, Lagos to São Paulo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href="https://github.com/muhammadhisham2027/sahafa-app/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-2xl font-semibold text-sm hover:bg-white/90 transition-colors"
          >
            <AndroidIcon />
            Download for Android
          </a>
          <a
            href="#newsletter"
            className="inline-flex items-center justify-center gap-2 bg-white/[0.06] border border-white/[0.08] text-white px-8 py-4 rounded-2xl font-semibold text-sm hover:bg-white/10 transition-colors"
          >
            Subscribe to newsletter
          </a>
        </div>
        <p className="text-xs text-white/25">v1.3.0 · Android APK · Free forever</p>
      </section>

      {/* Regions bar */}
      <section className="border-y border-white/[0.06] bg-white/[0.02] py-10">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-xs text-white/30 uppercase tracking-widest font-medium mb-8">Coverage</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {REGIONS.map((r) => (
              <div key={r.label} className="text-center">
                <div className="text-2xl font-bold mb-1" style={{ color: r.color }}>{r.sources}+</div>
                <div className="text-xs text-white/40 font-medium">{r.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-white/20 mt-8">sources across 80+ countries · updated every 6 hours</p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-3">Everything you need</h2>
        <p className="text-white/40 text-center text-sm mb-14">Built for readers who care about tech beyond Silicon Valley</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:bg-white/[0.05] transition-colors">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* App screenshots / feature highlight */}
      <section className="border-y border-white/[0.06] bg-white/[0.02] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Filter by country, region, or category</h2>
              <p className="text-white/50 leading-relaxed mb-8">
                Tap any region to focus on a part of the world, then drill down to a specific country.
                Filter by Tech, Startups, AI, or Dev — or combine them all.
              </p>
              <ul className="space-y-4">
                {[
                  "🌍  Country picker with search — find any of 80+ countries instantly",
                  "📰  Region filter — Global, MENA, Africa, Asia, Europe, Americas, Oceania",
                  "🏷️  Category chips — Tech, Startups, Dev, AI",
                  "📅  Date filter — Today, This week, This month",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Trending", desc: "Top stories in the last 48h" },
                { label: "Offline mode", desc: "Cached feed when no connection" },
                { label: "Bookmarks", desc: "Save articles to read later" },
                { label: "Read history", desc: "See what you've already read" },
              ].map((item) => (
                <div key={item.label} className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-5">
                  <div className="font-semibold text-sm text-white mb-1">{item.label}</div>
                  <div className="text-xs text-white/40">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-3">Get the daily digest</h2>
        <p className="text-white/40 text-sm mb-10 leading-relaxed">
          The best tech stories from around the world, curated and delivered every morning.
          No noise, just the stories that matter.
        </p>

        {status === "success" ? (
          <div className="flex flex-col items-center gap-3 py-6">
            <span className="text-5xl">🎉</span>
            <p className="text-lg font-semibold">You&apos;re subscribed!</p>
            <p className="text-white/40 text-sm">Check your inbox tomorrow morning.</p>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white/[0.06] border border-white/[0.1] rounded-2xl px-5 py-4 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-white text-black px-7 py-4 rounded-2xl text-sm font-semibold hover:bg-white/90 transition-colors disabled:opacity-50 whitespace-nowrap"
            >
              {status === "loading" ? "..." : "Subscribe free"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm mt-3">Something went wrong. Try again.</p>
        )}
        <p className="text-xs text-white/20 mt-4">No spam. Unsubscribe anytime.</p>
      </section>

      {/* Download CTA */}
      <section className="border-t border-white/[0.06] bg-white/[0.02] py-20 text-center">
        <div className="max-w-lg mx-auto px-6">
          <div className="text-5xl mb-6">📱</div>
          <h2 className="text-3xl font-bold mb-4">Download Sahafa</h2>
          <p className="text-white/40 text-sm mb-8">Free Android app · No account · No tracking</p>
          <a
            href="https://github.com/muhammadhisham2027/sahafa-app/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-2xl font-semibold text-sm hover:bg-white/90 transition-colors"
          >
            <AndroidIcon />
            Download APK · v1.3.0
          </a>
          <p className="text-xs text-white/20 mt-4">
            Sideload on Android · Settings → Install unknown apps
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-10 text-center">
        <p className="text-sm text-white/20 mb-2">صحافة · Sahafa</p>
        <div className="flex justify-center gap-6 text-xs text-white/20">
          <a href="https://github.com/muhammadhisham2027/sahafa-app" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">GitHub</a>
          <span>·</span>
          <span>Built with Next.js &amp; Supabase</span>
        </div>
      </footer>
    </main>
  );
}

function AndroidIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.523 15.341a1.029 1.029 0 0 1-1.029-1.028 1.029 1.029 0 0 1 1.029-1.029 1.029 1.029 0 0 1 1.029 1.029 1.029 1.029 0 0 1-1.029 1.028m-11.046 0a1.029 1.029 0 0 1-1.029-1.028 1.029 1.029 0 0 1 1.029-1.029 1.029 1.029 0 0 1 1.029 1.029 1.029 1.029 0 0 1-1.029 1.028m11.405-6.02l2.057-3.564a.428.428 0 0 0-.157-.585.428.428 0 0 0-.585.157l-2.083 3.609A12.323 12.323 0 0 0 12 8.367a12.323 12.323 0 0 0-5.114 1.071L4.803 5.829a.428.428 0 0 0-.585-.157.428.428 0 0 0-.157.585l2.057 3.564C3.596 11.098 1.974 13.608 1.8 16.5h20.4c-.174-2.892-1.796-5.402-4.318-7.179" />
    </svg>
  );
}
