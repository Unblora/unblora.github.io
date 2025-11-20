importScripts('/unblora/uv/uv.bundle.js');
importScripts('/unblora/uv/uv.config.js');
importScripts(__uv$config.sw || '/unblora/uv/uv.sw.js')

const sw = new UVServiceWorker();

self.addEventListener('fetch', event =>
    event.respondWith(
        sw.fetch(event)
    )
);