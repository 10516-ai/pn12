const CACHE_NAME = 'science-quiz-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
  // เพิ่มไฟล์ .css หรือ .js อื่นๆ ที่เว็บของคุณใช้เพิ่มเติมที่นี่
];

// ติดตั้ง Cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// ดึงไฟล์จาก Cache เมื่อไม่อยู่ในเครือข่าย
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
