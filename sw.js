self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('your-app-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles/main.css',
        '/scripts/main.js'
        // Add more URLs here for offline caching
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
