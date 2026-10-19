"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import { Extrude } from "@/components/three-d/Extrude";
import { Pressable } from "@/components/ui/Button";
import { Coin } from "@/components/ui/Coin";
import { Icon } from "@/components/ui/Icon";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const label = "block text-sm font-semibold";
const field =
  "mt-1.5 w-full rounded-md border border-navy-900/20 bg-white px-4 py-3 text-[15px] font-normal text-navy-900 shadow-inner placeholder:text-navy-900/55 focus:border-gold-600 focus:outline-none focus:ring-2 focus:ring-gold-500/60";

export function ContactForm() {
  const pathname = usePathname();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [service, setService] = useState("");

  // On a service page, preselect that service.
  const slug = pathname.startsWith("/services/") ? pathname.split("/")[2] : "";
  useEffect(() => {
    setService(services.find((s) => s.slug === slug)?.title ?? "");
  }, [slug]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (!res.ok || !data?.ok) throw new Error(data?.error ?? "Your message could not be sent.");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Your message could not be sent.");
      setStatus("error");
    }
  }

  return (
    <div className="h-full drop-shadow-2xl">
      <Extrude
        depth={0}
        faceClass="bg-[color:var(--inv)]"
        className="p-6 pt-9 text-[color:var(--inv-fg)] sm:p-9 sm:pt-12"
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === "sent" ? (
            <motion.div
              key="sent"
              role="status"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex min-h-[340px] flex-col items-start justify-center gap-4"
            >
              <Coin icon="check" size="lg" />
              <h3 className="text-2xl">Thank you. We have your message.</h3>
              <p className="max-w-md opacity-85">
                We will review it and get back to you as soon as possible during office hours. If it is urgent, call{" "}
                <a href={site.phone.href} className="font-semibold underline decoration-gold-600 underline-offset-4">
                  {site.phone.display}
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="font-heading text-sm font-semibold underline decoration-gold-600 decoration-2 underline-offset-4"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={onSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid h-full gap-4 sm:grid-cols-2 sm:grid-rows-[auto_auto_auto_minmax(0,1fr)_auto]"
            >
              <h3 className="text-xl sm:col-span-2 sm:text-2xl">Request your free consultation</h3>
              <label className={label}>
                Full name
                <input name="name" required maxLength={120} autoComplete="name" placeholder="Your name" className={field} />
              </label>
              <label className={label}>
                Email
                <input
                  type="email"
                  name="email"
                  required
                  maxLength={160}
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={field}
                />
              </label>
              <label className={label}>
                Phone
                <input
                  type="tel"
                  name="phone"
                  maxLength={40}
                  autoComplete="tel"
                  placeholder="(555) 555-5555"
                  className={field}
                />
              </label>
              <label className={label}>
                How can we help?
                <select name="service" value={service} onChange={(e) => setService(e.target.value)} className={field}>
                  <option value="">Not sure yet</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </label>
              <label className={`${label} flex flex-col sm:col-span-2`}>
                Your message
                <textarea
                  name="message"
                  required
                  minLength={10}
                  maxLength={4000}
                  rows={5}
                  placeholder="Briefly describe your situation and any upcoming deadlines."
                  className={`${field} min-h-[8rem] flex-1 resize-none`}
                />
              </label>

              {/* Honeypot: real visitors never see or fill this. */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label>
                  Website
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <Pressable>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-b from-gold-300 to-gold-500 px-7 py-3 font-heading text-sm font-semibold tracking-wide text-navy-950 shadow-btn-gold transition-opacity hover:from-gold-200 hover:to-gold-400 disabled:opacity-60"
                  >
                    <Icon name="send" className="h-4 w-4" />
                    {status === "sending" ? "Sending..." : "Send message"}
                  </button>
                </Pressable>
                <p className="max-w-xs text-xs leading-5 opacity-70">
                  Please do not send confidential details through this form. Contacting us does not create a
                  solicitor-client relationship.
                </p>
              </div>

              {status === "error" && (
                <p role="alert" className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-800 sm:col-span-2">
                  {error} You can also call{" "}
                  <a href={site.phone.href} className="font-semibold underline">
                    {site.phone.display}
                  </a>{" "}
                  or email{" "}
                  <a href={`mailto:${site.email}`} className="font-semibold underline">
                    {site.email}
                  </a>
                  .
                </p>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </Extrude>
    </div>
  );
}
