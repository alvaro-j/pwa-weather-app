# PWA Weather App

<p align="center">
![image](https://user-images.githubusercontent.com/86482525/157239881-09325d75-cb40-4d37-a826-ed3a03778b13.png)
</p>

## Getting Started with Create React App ⚛

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of contents✒️

- [Overview](#overview)🎯
  - [Links](#links)🔗
- [My process](#my-process)🧩
  - [Built with](#built-with)🔨
  - [What I learned](#what-i-learned)📝
  - [Useful resources](#useful-resources)
- [Author](#author)🙋🏻

## Overview🎯

PWA weather app made with React and OpenWeather API. It shows an offline page when there's no internet connection.

### Links🔗

- Live Site URL: [PWA Weather App](https://pwa-weather-app-six.vercel.app/)

## My process🧩

### Built with🔨

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript(React.js)
- Create React App
- Service Worker
- JSON Manifest

### What I learned📝

- Set up the <strong>Service Worker</strong> file:
```js
self.addEventListener("install", (e) => {
	e.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log("opened cache");
			return cache.addAll(urlsToCache);
		})
	);
});
```
### Useful resources

- [Convert React app into PWA](https://www.youtube.com/watch?v=RvEEZLxiAlQ) - This helped me to transform my normal React application into a Progressive Web App. I'd recommend it to anyone who wants to do the same.

## Author🙋🏻

- Website - [Álvaro J.](https://www.github.com/alvaro-j/)
