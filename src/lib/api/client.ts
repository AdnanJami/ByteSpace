export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public details?: unknown,
  ) {
    super(message);
  }
}

// Empty when unset: requests resolve same-origin, against this app's own
// mock route handlers under src/app/api/. Point this at a real backend
// later without changing any call sites.
const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export async function api<T>(path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...init,
    credentials: "include",
    headers: { "Content-Type": "application/json", ...init.headers },
  });
  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new ApiError(res.status, body?.message ?? res.statusText, body);
  }
  return res.status === 204 ? (undefined as T) : res.json();
}
