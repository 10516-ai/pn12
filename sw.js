const CACHE_NAME = 'science-quiz-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './android-chrome-192x192.png',
  './android-chrome-512x512.png'
  // หากมีไฟล์ css หรือ js แยกต่างหาก ให้เพิ่มพาธไว้ที่นี่ด้วย เช่น './style.css', './script.js'
];

// ติดตั้ง Cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// เรียกใช้งาน Cache เมื่อออฟไลน์
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
