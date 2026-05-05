import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prompt Token Cost Forecaster – Forecast AI Prompt Costs Before Deployment",
  description: "Estimate token usage and costs for AI prompts across GPT, Claude, and more before going to production."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="89a20f81-6c2f-4d29-b530-e5769aa916ef"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
