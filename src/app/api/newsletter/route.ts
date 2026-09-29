import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/api/newsletter";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = newsletterSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { message: parsed.error.issues[0]?.message ?? "Invalid email" },
      { status: 422 },
    );
  }

  return NextResponse.json({ ok: true });
}
