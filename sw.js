// SEBA BALANCE · service worker (de VAO POS V33). A propósito NO guarda copias de nada:
// la app siempre carga la última versión publicada (se actualiza sola, sin reinstalar)
// y los movimientos siempre van directo al servidor.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {}); // no intercepta nada
