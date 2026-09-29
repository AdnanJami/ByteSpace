import { NextResponse } from "next/server";
import { registerSchema } from "@/lib/api/auth";
import { encodeSession, SESSION_COOKIE, sessionCookieOptions } from "@/lib/auth/sessionCookie";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = registerSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { message: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 422 },
    );
  }

  // No real backend: registration always succeeds for valid input and signs the user in.
  const { fullName, email } = parsed.data;
  const response = NextResponse.json({ ok: true });
  response.cookies.set(
    SESSION_COOKIE,
    encodeSession({ name: fullName, email }),
    sessionCookieOptions,
  );
  return response;
}
