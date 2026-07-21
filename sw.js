// קובץ Service Worker בסיסי כדי לאפשר התקנת PWA
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // כרגע אנחנו לא שומרים קבצים בזיכרון במצב אופליין (Cache), אלא רק מאפשרים את זיהוי האפליקציה להתקנה.
});
