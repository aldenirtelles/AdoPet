var CACHE = "pwabuilder-page";

self.addEventListener('install', async (event) => {
  self.skipWaiting();
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

self.addEventListener("message", (event) => {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());
});