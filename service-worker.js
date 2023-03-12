importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const CACHE = "pwabuilder-page";

const offlineFallbackPage = "index.html";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll([
        './index.html',
        './css/style.css',
        './js/script.js',
        './assets/img/portfolio/bird.png',
        './assets/img/portfolio/cat.png',
        './assets/img/portfolio/dog.png',
        './assets/img/portfolio/jaguar.png',
        './assets/img/portfolio/rabbit.png',
        './assets/img/portfolio/rat.png',
        './assets/img/16.png',
        './assets/img/20.png',
        './assets/img/2/.png',
        './assets/img/32.png',
        './assets/img/40.png',
        './assets/img/50.png',
        './assets/img/57.png',
        './assets/img/58.png',
        './assets/img/60.png',
        './assets/img/64.png',
        './assets/img/72.png',
        './assets/img/76.png',
        './assets/img/80.png',
        './assets/img/87.png',
        './assets/img/100.png',
        './assets/img/114.png',
        './assets/img/120.png',
        './assets/img/128.png',
        './assets/img/144.png',
        './assets/img/152.png',
        './assets/img/167.png',
        './assets/img/180.png',
        './assets/img/192.png',
        './assets/img/256.png',
        './assets/img/512.png',
        './assets/img/1024.png',
      ]))
  );
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResp = await event.preloadResponse;

        if (preloadResp) {
          return preloadResp;
        }

        const networkResp = await fetch(event.request);
        return networkResp;
      } catch (error) {

        const cache = await caches.open(CACHE);
        const cachedResp = await cache.match(offlineFallbackPage);
        return cachedResp;
      }
    })());
  }
});