import { NextResponse } from "next/server";
import { registerSchema } from "@/lib/api/auth";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = registerSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { message: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 422 },
    );
  }

  // No real backend: registration always succeeds for valid input and starts a session,
  // matching the demo login's cookie so the "already signed in" flow is consistent.
  const response = NextResponse.json({ ok: true });
  response.cookies.set("bytespace_session", "demo-session", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}
