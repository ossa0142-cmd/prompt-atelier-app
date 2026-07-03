const PROMPT_ATELIER_SW = "prompt-atelier-shell-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", () => {
  // Prompt Atelier keeps user data in localStorage / IndexedDB.
  // The service worker is intentionally light so it never serves stale app data.
});
