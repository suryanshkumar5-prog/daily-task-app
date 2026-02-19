self.addEventListener('install', (e) => {
    console.log('[Suryansh OS] Service Worker Installed');
});
self.addEventListener('fetch', (e) => {
    // PWA requirement pass karne ke liye dummy fetch
});