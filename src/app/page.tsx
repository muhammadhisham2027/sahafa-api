"use client";

import { useState } from "react";

const SOURCES = [
  { name: "TechCrunch", region: "Global" },
  { name: "The Verge", region: "Global" },
  { name: "Wired", region: "Global" },
  { name: "MENAbytes", region: "MENA" },
  { name: "ArabNet", region: "MENA" },
  { name: "Sifted", region: "Europe" },
  { name: "TechCabal", region: "Africa" },
  { name: "TechNode", region: "Asia" },
  { name: "Rest of World", region: "Global" },
  { name: "Hacker News", region: "Global" },
  { name: "MIT Tech Review", region: "Global" },
  { name: "VentureBeat", region: "Global" },
];

const FEATURES = [
  { icon: "🌍", title: "Global + Regional", desc: "29 sources across Egypt, MENA, Europe, Africa, and Asia" },
  { icon: "📱", title: "Android App", desc: "Browse on your phone — search, bookmark, and share articles" },
  { icon: "✉️", title: "Daily Newsletter", desc: "Best stories delivered every morning at 8am" },
  { icon: "🔖", title: "Save for Later", desc: "Bookmark articles and read them at your own pace" },
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
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Nav */}
      <nav className="border-b border-gray-100 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <span className="text-2xl font-bold">صحافة</span>
        <a
          href="https://expo.dev/accounts/monietzsche/projects/sahafa-app/builds/92d54c20-335a-494c-b353-d76b70757598"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-colors"
        >
          Download App
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-wide">
          Free · No signup required to browse
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
          Tech news from<br />
          <span className="text-gray-400">everywhere.</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
          One feed for global and regional tech — Egypt, MENA, Europe, Africa, Asia.
          Browse on your phone or get the best stories delivered to your inbox daily.
        </p>

        {status === "success" ? (
          <div className="flex flex-col items-center gap-2">
            <span className="text-4xl">🎉</span>
            <p className="text-lg font-semibold">You&apos;re subscribed!</p>
            <p className="text-gray-500 text-sm">Check your inbox tomorrow morning.</p>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-gray-900 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-700 transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "..." : "Subscribe free"}
            </button>
          </form>
        )}
        {status === "error" && <p className="text-red-500 text-sm mt-2">Something went wrong. Try again.</p>}
        <p className="text-xs text-gray-400 mt-3">No spam. Unsubscribe anytime.</p>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-2">29 sources, curated</h2>
        <p className="text-gray-500 text-center text-sm mb-10">From global tech giants to emerging regional voices</p>
        <div className="flex flex-wrap justify-center gap-3">
          {SOURCES.map((s) => (
            <span key={s.name} className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-full">
              {s.name}
              <span className="ml-2 text-xs text-gray-400">{s.region}</span>
            </span>
          ))}
          <span className="bg-gray-100 text-gray-400 text-sm px-4 py-2 rounded-full">+ 17 more</span>
        </div>
      </section>

      {/* App CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Get the Android app</h2>
          <p className="text-gray-400 mb-8">Browse articles, search by topic, save bookmarks, and share stories.</p>
          <a
            href="https://expo.dev/accounts/monietzsche/projects/sahafa-app/builds/92d54c20-335a-494c-b353-d76b70757598"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors"
          >
            Download APK →
          </a>
          <p className="text-gray-500 text-xs mt-4">Android · Free · No account needed</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 text-center text-xs text-gray-400">
        <p>صحافة · Sahafa · Built with Next.js &amp; Supabase</p>
      </footer>
    </main>
  );
}
