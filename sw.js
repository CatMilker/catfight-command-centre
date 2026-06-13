// Catfight Command Centre — Service Worker
// Caches the tool shell for offline use. Data fetches (UEX, workers) still need network.
// Version bump this string to force cache refresh on deploy.
const CACHE_VERSION = 'catfight-v1.1';
const CACHE_NAME    = CACHE_VERSION;

// Files to cache on install — the tool shell + all JSON data files
const PRECACHE = [
  '/',
  '/index.html',
  '/missions.json',
  '/comp-bps.json',
  '/curated-loadouts.json',
  '/trade-locs.json',
  '/ship-loadouts.json',
  '/sdb-ships.json',
  '/rep-factions.json',
  '/combat-profiles.json',
];

// Install: pre-cache all shell files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

// Activate: delete old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys
        .filter(k => k !== CACHE_NAME)
        .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch: network-first for same-origin HTML/JSON (always get latest data when online,
// fall back to cache when offline). External API calls (workers, UEX, SC Wiki etc)
// are left to the browser entirely — no caching.
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Always go to network for external API calls (workers, UEX, SC Wiki etc)
  if(url.hostname !== self.location.hostname) {
    return; // let browser handle — no caching for external fetches
  }

  // Network-first for same-origin (HTML + JSON data files) — keeps data current,
  // falls back to cache only if offline or the network request fails.
  event.respondWith(
    fetch(event.request).then(response => {
      if(!response || response.status !== 200 || response.type !== 'basic') {
        return response;
      }
      const clone = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
      return response;
    }).catch(() => caches.match(event.request))
  );
});
