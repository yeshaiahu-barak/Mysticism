const CACHE_NAME = 'mystic-report-svg-v1';

// רשימת הקבצים הנחוצים להתקנה תקינה ולעבודה באופליין
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './config.js',
  './logo.svg'
];

self.addEventListener('install', (event) => {
  console.log('[Service Worker] שומר קבצים למטמון...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    }).catch(() => {
      if (event.request.mode === 'navigate') {
        return caches.match('./index.html');
      }
    })
  );
});
