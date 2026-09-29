// Tracks navigation inside the app during this page load:
// - whether the previous history entry is one of our pages, so a Back button
//   can go back (keeping its scroll position) instead of leaving the site;
// - whether the latest navigation came from Back/Forward, where the browser
//   restores the scroll position and we must not reset it.
let firstPathname: string | null = null;
let hasInAppHistory = false;
let pendingPopNavigation = false;

if (typeof window !== "undefined") {
  window.addEventListener("popstate", () => {
    pendingPopNavigation = true;
  });
}

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

/** True once after a Back/Forward navigation. */
export function consumePopNavigation(): boolean {
  const wasPop = pendingPopNavigation;
  pendingPopNavigation = false;
  return wasPop;
}

const coursePath = /^\/courses\/([^/]+)/;

/** Moving between the About / Lessons / Reviews tabs of one course. */
export function isSameCourseTabSwitch(from: string, to: string): boolean {
  const a = coursePath.exec(from);
  const b = coursePath.exec(to);
  return a !== null && b !== null && a[1] === b[1];
}
