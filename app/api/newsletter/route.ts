import { NextResponse } from "next/server";
import { appendFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SIGNUP_SOURCE = "localdealsflorida.org";
const DEFAULT_FALLBACK_CSV_PATH = "/tmp/local-florida-deals-subscribers.csv";

type SignupPayload = {
  email?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function csvEscape(value: string) {
  return `"${value.replaceAll('"', '""')}"`;
}

async function saveSignupToCsv(email: string) {
  const csvPath = process.env.NEWSLETTER_FALLBACK_CSV_PATH ?? DEFAULT_FALLBACK_CSV_PATH;
  const createdAt = new Date().toISOString();
  const line = [email, SIGNUP_SOURCE, createdAt].map(csvEscape).join(",") + "\n";

  await mkdir(dirname(csvPath), { recursive: true });
  await appendFile(csvPath, line, "utf8");
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as SignupPayload;
    const email = payload.email?.trim().toLowerCase();

    if (!email || !emailPattern.test(email)) {
      return NextResponse.json({ ok: false, message: "Please enter a valid email address." }, { status: 400 });
    }

    await saveSignupToCsv(email);

    return NextResponse.json({
      ok: true,
      message: "You’re in! Local Deals Florida alerts are on the way."
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "We couldn't save your signup. Please try again in a moment." },
      { status: 500 }
    );
  }
}
