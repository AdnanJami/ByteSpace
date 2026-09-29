import { NextResponse } from "next/server";
import { loginSchema } from "@/lib/api/auth";
import { encodeSession, SESSION_COOKIE, sessionCookieOptions } from "@/lib/auth/sessionCookie";

const DEMO_EMAIL = "demo@bytespace.com";
const DEMO_PASSWORD = "password123";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = loginSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { message: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 422 },
    );
  }

  const { email, password } = parsed.data;
  if (email !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
    return NextResponse.json(
      { message: "Incorrect email or password. Try demo@bytespace.com / password123." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(
    SESSION_COOKIE,
    encodeSession({ name: "Demo User", email }),
    sessionCookieOptions,
  );
  return response;
}
