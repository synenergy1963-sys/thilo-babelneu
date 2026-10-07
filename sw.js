// ThiLo! Babel Basic — Service Worker
// Diese Datei muss bei jedem Deploy über die _headers-Datei vom Browser-Cache
// ausgenommen sein, sonst findet kein Update mehr statt. Der CACHE-Name wird
// bei jedem Deploy erhöht (v1 -> v2 -> v3 ...), damit der alte Cache beim
// Aktivieren der neuen Version verworfen wird.

const CACHE = "thilo-babel-basic-v3";
const SHELL = [
  "/", "/index.html", "/manifest.json", "/coping-phrasen.txt",
  "/icons/favicon-48.png", "/icons/apple-touch-icon.png", "/icons/logo-144.png",
  "/icons/icon-192.png", "/icons/icon-512.png", "/icons/icon-maskable-512.png"
];

// ============ Install: Shell cachen + neue Version sofort aktivieren ============
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then(async (c) => {
      // Tolerant: Eine fehlende Shell-Datei killt nicht den ganzen SW.
      for (const url of SHELL) {
        try {
          await c.add(url);
        } catch (err) {
          console.warn("ThiLo! Babel SW: Shell-Datei nicht ladbar:", url, err);
        }
      }
    }).then(() => self.skipWaiting())
  );
});

// ============ Activate: alte Caches löschen + sofort alle Tabs übernehmen ============
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// ============ Fetch: Network-First mit Cache-Fallback ============
self.addEventListener("fetch", (e) => {
  // Funktionsaufrufe (Übersetzung) niemals aus dem Cache bedienen
  if (e.request.url.includes("/.netlify/functions/")) return;

  // Nur GET-Anfragen cachen (POST, PUT etc. nicht)
  if (e.request.method !== "GET") return;

  // Externe Domains (Google, MyMemory, PayPal etc.) nicht anfassen —
  // Browser soll sie normal behandeln
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    fetch(e.request)
      .then((res) => {
        // Frische Antwort im Cache ablegen, damit sie offline verfügbar ist
        if (res && res.status === 200 && res.type === "basic") {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {});
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});