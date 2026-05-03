"use client";

import { Mail, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("Free alerts. No spam. Deals change often.");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedEmail = email.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setMessage("Saving your deal alerts...");
    window.gtag?.("event", "newsletter_signup_started", {
      site: "localdealsflorida.org",
      source: "local"
    });

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: trimmedEmail })
      });
      const result = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.message ?? "We couldn't save your signup. Please try again.");
      }

      setStatus("success");
      setMessage(result.message ?? "You’re in! Local deals are on the way.");
      setEmail("");
      window.gtag?.("event", "newsletter_signup_success", {
        site: "localdealsflorida.org",
        source: "local"
      });
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We couldn't save your signup. Please try again.");
    }
  }

  return (
    <form className="mt-6 space-y-3" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3 rounded-[24px] bg-white p-3 shadow-2xl shadow-black/20 sm:flex-row">
        <label className="sr-only" htmlFor="email">
          Email address
        </label>
        <div className="relative flex-1">
          <Mail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#6f8588]" size={18} />
          <input
            className="h-[52px] w-full rounded-full border border-[#d8e6e3] bg-[#f8fbf7] pl-11 pr-4 font-semibold text-[#163235] outline-none focus:border-[#087f8c]"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            required
            type="email"
            value={email}
          />
        </div>
        <button
          className="h-[52px] rounded-full bg-[#ffb000] px-7 font-black text-[#163235] transition hover:bg-[#ffc84d] disabled:cursor-not-allowed disabled:opacity-70"
          disabled={status === "submitting"}
          type="submit"
        >
          {status === "submitting" ? "Sending..." : "Send Me Deals"}
        </button>
      </div>
      <p
        className={`flex items-center gap-2 text-sm font-semibold ${
          status === "error" ? "text-red-200" : status === "success" ? "text-emerald-200" : "text-white/76"
        }`}
        role={status === "error" ? "alert" : "status"}
      >
        <ShieldCheck size={16} aria-hidden="true" />
        {message}
      </p>
    </form>
  );
}
