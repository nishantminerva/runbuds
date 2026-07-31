// Client-side platform detection for the deep-link fallback pages.
//
//   "mobile"  → iPhone / iPad / Android: the native app is the natural home,
//               hand off to the advancetouring:// scheme automatically.
//               (iPadOS Safari masquerades as "Macintosh"; the touch-points
//               check is what identifies it.)
//   "mac"     → a real Mac: the iPad app MAY be installed (Apple Silicon), so
//               never auto-redirect — offer "open the app" and "continue in
//               the browser" and let the user choose.
//   "desktop" → Windows/Linux: no native app exists, continue to the web app.
export function detectPlatform() {
  const ua = navigator.userAgent;
  const isIpad = /iPad/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  if (isIpad || /iPhone|iPod|Android/i.test(ua)) return "mobile";
  if (/Macintosh/.test(ua)) return "mac";
  return "desktop";
}
