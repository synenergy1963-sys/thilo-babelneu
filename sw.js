const CACHE = "thilo-babel-v34";
const SHELL = ["/", "/index.html", "/manifest.json", "/icon.svg", "/coping-phrasen.txt"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
});

self.addEventListener("fetch", (e) => {
  // Funktionsaufrufe (Übersetzung) niemals aus dem Cache bedienen
  if (e.request.url.includes("/.netlify/functions/")) return;

  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request))
  );
});
