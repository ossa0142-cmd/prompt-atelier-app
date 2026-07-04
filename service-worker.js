const PROMPT_ATELIER_SW = "prompt-atelier-shell-v2";

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Keep this network-first and cache-free while Prompt Atelier is shared as a prototype.
  // User data lives in localStorage / IndexedDB and is not touched by this worker.
  if (event.request.method !== "GET") return;
  event.respondWith(fetch(event.request));
});
