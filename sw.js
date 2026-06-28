const CACHE_NAME = 'chosen-block-v18';
const ASSETS = [
  './',
  './index.html',
  './index.css',
  './app.js',
  './game.js',
  './render.js',
  './audio.js',
  './quiz.js',
  './manifest.json',
  './assets/icons/icon.svg'
];

// Instalação: Salva arquivos no cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Armazenando assets no cache...');
        return cache.addAll(ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Ativação: Limpa caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Limpando cache antigo:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Requisições: Serve do cache se disponível, senão busca na rede
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Retorna o arquivo do cache se encontrado
        if (response) {
          return response;
        }

        // Caso contrário, busca na rede
        return fetch(event.request).then((networkResponse) => {
          // Valida se a resposta é válida
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }

          // Salva dinamicamente no cache se for uma requisição do próprio app
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        });
      })
      .catch(() => {
        // Fallback caso falhe rede e cache (ex: imagens externas ausentes)
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      })
  );
});
