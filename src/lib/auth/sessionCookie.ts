import { z } from "zod";

export const SESSION_COOKIE = "bytespace_session";
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

const sessionUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});
export type SessionUser = z.infer<typeof sessionUserSchema>;

// Mock session: the cookie just carries the user's name and email. A real backend
// would issue an opaque, signed token instead.
export function encodeSession(user: SessionUser): string {
  return Buffer.from(JSON.stringify(user)).toString("base64url");
}

export function decodeSession(value: string | undefined): SessionUser | null {
  if (!value) return null;
  try {
    const parsed = sessionUserSchema.safeParse(
      JSON.parse(Buffer.from(value, "base64url").toString("utf8")),
    );
    return parsed.success ? parsed.data : null;
  } catch {
    return null;
  }
}

export const sessionCookieOptions = {
  httpOnly: true,
  sameSite: "lax",
  path: "/",
  maxAge: SESSION_MAX_AGE,
} as const;
