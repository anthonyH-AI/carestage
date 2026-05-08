/* ═══════════════════════════════════════════════════════════════
   SERVICE WORKER — offline support
   Strategy: cache-first for app shell; network-first not needed
   here because all content is static (no dynamic API calls).

   Cache version: bump CACHE_VERSION when deploying content changes
   to force old caches to be cleared on next visit.
════════════════════════════════════════════════════════════════ */

const CACHE_VERSION = 'mcsc-v21';

const APP_SHELL = [
  './',
  './index.html',
  './icon.svg',
  './manifest.json',
  './resources.js',
  './action-plans.js',
  './contentReviewLog.js',
  './src/config/admin.js',
  './src/config/branding.js?v=13',
  './src/content/conditions.js',
  './src/content/nextSteps.js',
  './src/content/responsibilities.js',
  './src/content/helpLinks.js',
  './src/content/questions.js',
  './src/content/stageResults.js',
  './src/content/actionPlans.js',
  './src/content/resources.js',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_VERSION)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // Only handle same-origin GET requests
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cache successful responses for app shell files
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // Offline fallback for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
