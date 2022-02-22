const CACHE_NAME = "version1";
const urlsToCache = ["index.html", "offline.html"];

const self = this; // in the service worker file, "this" represents the actual service worker

// install
self.addEventListener("install", (e) => {
	e.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log("opened cache");
			return cache.addAll(urlsToCache);
		})
	);
});

// listen
self.addEventListener("fetch", (e) => {
	e.respondeWith(
		caches.match(e.request).then(() => {
			return fetch(e.request).catch(() => caches.match("offline.html")); // if there is no internet, it displays the offline html
		})
	);
});

// activate
self.addEventListener("activate", (e) => {
	const cacheWhitelist = [];
	cacheWhitelist.push(CACHE_NAME); // keeps the cache

	e.waitUntil(
		caches.keys().then((cacheNames) => {
			Promise.all(
				cacheNames.map((cacheName) => {
					if (!cacheWhitelist.includes(cacheName)) {
						return caches.delete(cacheNames); // delete all the previous versions of the cache
					}
				})
			);
		})
	);
});
