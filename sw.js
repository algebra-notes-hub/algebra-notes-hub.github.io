// Makes Algebra Notes installable as an app. Always uses the network (never serves stale copies),
// so updates show up right away.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (e) => {
  if (e.request.mode !== "navigate") return;
  e.respondWith(fetch(e.request).catch(() => new Response(
    '<!doctype html><meta charset="utf-8"><body style="margin:0;height:100vh;display:grid;place-items:center;background:#0d0f14;color:#8b93a7;font:15px system-ui,sans-serif">C4n\'t r34ch th3 5tudy 4pp. Ch3ck y0ur 1nt3rn3t.</body>',
    { headers: { "Content-Type": "text/html; charset=utf-8" } })));
});
