// שם המטמון שלנו בזיכרון של הדפדפן
const CACHE_NAME = 'mystic-report-v1';

// רשימת הקבצים שאנחנו רוצים לשמור בטלפון של המשתמש
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './config.js'
];

// אירוע התקנה: קורה פעם אחת כשהמשתמש פותח את האתר. כאן שומרים את הקבצים.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// אירוע הפעלה: מנקה גרסאות ישנות של המטמון אם עדכנו את האפליקציה.
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// אירוע משיכה (fetch): זה החלק החשוב! כשהאתר מבקש קובץ, נבדוק קודם אם הוא בזיכרון.
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
