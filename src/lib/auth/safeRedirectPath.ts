/**
 * Only allow redirects to paths on this site ("/courses"), never to another
 * origin ("https://evil.example", "//evil.example").
 */
export function safeRedirectPath(value: string | undefined, fallback = "/"): string {
  if (!value || !value.startsWith("/") || value.startsWith("//") || value.startsWith("/\\")) {
    return fallback;
  }
  return value;
}
