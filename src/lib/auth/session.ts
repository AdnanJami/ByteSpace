import { cookies } from "next/headers";
import { decodeSession, SESSION_COOKIE, type SessionUser } from "./sessionCookie";

export async function getSessionUser(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  return decodeSession(cookieStore.get(SESSION_COOKIE)?.value);
}
