// Tracks whether the user has navigated inside the app during this page load,
// so a Back button knows whether the previous history entry is one of our
// pages (go back, keeping its scroll position) or somewhere else (use a fallback).
let firstPathname: string | null = null;
let hasInAppHistory = false;

export function recordPathname(pathname: string) {
  if (firstPathname === null) {
    firstPathname = pathname;
  } else if (pathname !== firstPathname) {
    hasInAppHistory = true;
  }
}

export function canGoBackInApp(): boolean {
  return hasInAppHistory;
}
