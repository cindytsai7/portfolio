'use client'

import { useState } from "react";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";

const TAGS = ["META", "PLATFORM", "TOOLING", "NDA"];
const PASSWORD = "meta2025";


export default function ComplianceReviewPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === PASSWORD) {
      // unlock placeholder
    } else {
      setError(true);
    }
  }

  return (
    <main className="bg-portfolio-background">
      <CaseStudyNav />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pt-4 md:pt-8 pb-2">
        <div className="surface-card bg-portfolio-surface rounded-[20px] p-8 md:p-10 flex flex-col gap-8">

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className={`inline-flex items-center h-[26px] border border-portfolio-rule rounded-full px-3 text-caption font-mono text-portfolio-muted uppercase tracking-wider whitespace-nowrap${tag === "NDA" ? " bg-portfolio-rule/60" : ""}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title + body / metadata */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            {/* Left: title + body */}
            <div className="flex flex-col gap-4 flex-1 max-w-[720px]">
              <h1 className="text-h1 font-bold leading-tight tracking-tight text-portfolio-primary">
                Risk review systems
              </h1>
              <div className="flex flex-col gap-4">
                <p className="text-body text-portfolio-muted">
                  At Meta, I design tools that help teams identify, triage, and act on integrity risks across platforms. The goal is to make complex risk review workflows faster, more accurate, and scalable for the people protecting billions of users.
                </p>
                <p className="text-body text-portfolio-muted">
                  Currently, this has spanned designing systems that surface risk signals for researchers, end-to-end triage and escalation workflows for review teams, and leading the design vision for an agentic AI-powered risk review experience.
                </p>
              </div>
            </div>

            {/* Right: metadata */}
            <div className="flex flex-col gap-4 md:w-[300px] shrink-0">
              {[{ label: "Role", value: "Lead Designer" }, { label: "Timeline", value: "2025 – Now" }].map((item, i) => (
                <div key={item.label} className="flex flex-col gap-2">
                  <p className="text-caption font-mono uppercase tracking-widest text-portfolio-muted">{item.label}</p>
                  <p className="text-body font-medium text-portfolio-primary">{item.value}</p>
                  {i === 0 && <div className="bg-portfolio-rule h-px w-full mt-1" />}
                </div>
              ))}
            </div>
          </div>

          {/* Password gate */}
          <form onSubmit={handleSubmit} className="bg-portfolio-background rounded-[14px] flex items-center gap-4 px-5 py-3 max-w-[720px]">
            <input
              type="password"
              placeholder="Enter password here"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              className="flex-1 bg-transparent text-body text-portfolio-primary placeholder:text-portfolio-muted placeholder:font-light outline-none"
            />
            {error && (
              <span className="text-caption text-portfolio-muted whitespace-nowrap">Incorrect password</span>
            )}
            <button
              type="submit"
              className="inline-flex items-center bg-portfolio-primary text-white text-body font-medium rounded-[12px] px-6 h-12 hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              Enter
            </button>
          </form>

        </div>
      </div>
    </main>
  );
}
