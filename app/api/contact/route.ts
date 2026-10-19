import { NextResponse } from "next/server";

export const runtime = "nodejs";

const clean = (value: unknown, max: number) => String(value ?? "").replace(/\r/g, "").trim().slice(0, max);

/**
 * Receives the contact form and emails it through Resend's REST API (no extra dependency).
 * Set RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL in Vercel (see .env.example).
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "That request could not be read." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this in, so pretend success and drop it.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 120);
  const email = clean(body.email, 160);
  const phone = clean(body.phone, 40);
  const service = clean(body.service, 80);
  const message = clean(body.message, 4000);

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10) {
    return NextResponse.json(
      { ok: false, error: "Please add your name, a valid email and a short message." },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set. The contact form submission was not delivered.");
    return NextResponse.json({ ok: false, error: "The contact form is not available right now." }, { status: 503 });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Jat Law Website <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL ?? "info@jatlawpc.com"],
      reply_to: email,
      subject: `Website enquiry: ${service || "General"} (${name})`.replace(/[\r\n]+/g, " "),
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Service: ${service || "Not sure yet"}`,
        "",
        message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    console.error("Resend error", response.status, await response.text());
    return NextResponse.json({ ok: false, error: "We could not send your message right now." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
