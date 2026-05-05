export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 flex flex-col gap-20">

      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] bg-[#58a6ff]/10 px-3 py-1 rounded-full">
          AI Prompt Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
          Forecast AI Prompt Costs<br />
          <span className="text-[#58a6ff]">Before Deployment</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl">
          Paste your prompts, pick your model, and instantly see token counts and cost projections across GPT-4, Claude, Gemini, and more — before a single dollar is spent in production.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Forecasting — $15/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-6 w-full bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
            <span className="ml-2 text-xs text-[#8b949e]">cost-forecast.tsx</span>
          </div>
          <div className="text-sm font-mono text-[#8b949e] space-y-1">
            <p><span className="text-[#ff7b72]">const</span> <span className="text-[#79c0ff]">prompt</span> = <span className="text-[#a5d6ff]">"Summarize this 2000-word article..."</span>;</p>
            <p><span className="text-[#ff7b72]">const</span> <span className="text-[#79c0ff]">model</span> = <span className="text-[#a5d6ff]">"gpt-4o"</span>;</p>
            <p><span className="text-[#ff7b72]">const</span> <span className="text-[#79c0ff]">forecast</span> = <span className="text-[#d2a8ff]">estimateCost</span>(<span className="text-[#79c0ff]">prompt</span>, <span className="text-[#79c0ff]">model</span>);</p>
            <p className="text-[#3fb950]">// tokens: 512 · cost: $0.0026 · 10k calls/day → $26/day</p>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: "⚡", title: "Instant Token Count", desc: "Accurate tokenization for every major model family." },
          { icon: "📊", title: "Usage Projections", desc: "Scale estimates from 1 call to millions per day." },
          { icon: "🔀", title: "Multi-Model Compare", desc: "Side-by-side cost breakdown across GPT, Claude, Gemini." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 flex flex-col gap-2">
            <span className="text-2xl">{f.icon}</span>
            <h3 className="font-semibold text-white text-sm">{f.title}</h3>
            <p className="text-xs text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="flex flex-col items-center gap-6">
        <h2 className="text-2xl font-bold text-white">Simple Pricing</h2>
        <div className="w-full max-w-sm bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-white">Pro</span>
            <span className="text-xs bg-[#58a6ff]/20 text-[#58a6ff] px-2 py-0.5 rounded-full font-medium">Most Popular</span>
          </div>
          <div className="flex items-end gap-1">
            <span className="text-5xl font-bold text-white">$15</span>
            <span className="text-[#8b949e] mb-1">/month</span>
          </div>
          <ul className="flex flex-col gap-2 text-sm text-[#c9d1d9]">
            {[
              "Unlimited prompt analyses",
              "GPT-4o, Claude 3.5, Gemini 1.5 & more",
              "Daily / monthly usage projections",
              "CSV export of cost reports",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="mt-2 bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg text-center transition-colors"
          >
            Get Started
          </a>
          <p className="text-xs text-[#8b949e] text-center">Cancel anytime. No hidden fees.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-white text-center">FAQ</h2>
        <div className="flex flex-col gap-4">
          {[
            {
              q: "Which AI models are supported?",
              a: "We support OpenAI GPT-3.5 and GPT-4 family, Anthropic Claude 2 and 3 family, Google Gemini 1.0 and 1.5, and Mistral models. New models are added as they launch."
            },
            {
              q: "How accurate are the token estimates?",
              a: "We use the same tokenizers as each provider (tiktoken for OpenAI, claude tokenizer for Anthropic) so estimates match production billing within 1–2%."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel from your billing portal at any time. You keep access until the end of your billing period with no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-[#8b949e] border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} Prompt Token Cost Forecaster. All rights reserved.
      </footer>

    </main>
  );
}
