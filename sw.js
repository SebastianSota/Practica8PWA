const STATIC_CACHE_NAME = 'static-cache-v1.1';
const INMUTABLE_CACHE_NAME = 'inmutable-cache-v1.1';
const DYNAMIC_CACHE_NAME = 'dynamic-cache-v1.1';

self.addEventListener('install', (event) => {
    console.log("SW: install");
    const promiseCache = caches.open(STATIC_CACHE_NAME).then((cache) => {
        return cache.addAll(
            [
                'https://github.com/SebastianSota/Practica8PWA/',
                'https://github.com/SebastianSota/Practica8PWA/index.html',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css',
                'https://img.wattpad.com/cover/240539622-288-k854048.jpg',
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/webfonts/fa-solid-900.ttf',
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/webfonts/fa-solid-900.woff2'
            ]
        );
    });    
    event.waitUntil(promiseCache);
});


self.addEventListener('fetch', (event) => {
    const respCache = caches.match(event.request)
    event.respondWith(respCache);
});