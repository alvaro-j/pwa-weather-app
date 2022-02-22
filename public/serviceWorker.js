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
			return fetch(e.request).catch(() => caches.match("offline.html"));
		})
	);
});

// activate
self.addEventListener("activate", (e) => {});
