
var CACHE_NAME = 'quiz-app' // cache name

var urlsToCache = [
 '/static/js/bundle.js',
 '/static/js/0.chunk.js',
 '/static/css/2.11829350.chunk.css',
 '/static/js/main.chunk.js',
 '/main.fdd55bff2343a3656490.hot-update.js',    
 '/static/css/main.8ee7fde6.chunk.css',
 '/static/js/2.733aefd4.chunk.js',
 '/static/js/main.eb83e8a2.chunk.js',
 '/static/js/main.034afd45.chunk.js',
 '/manifest.json',
 '/logo192.png',
 "index.html",        
 '/favicon.ico',
 '/',
 
 

]

this.addEventListener('install', (event) => {

 event.waitUntil(
     caches.open(CACHE_NAME)
         .then((cache) => {
             console.log('Opened Cache')
             return (
                 cache.addAll(urlsToCache)
                 
             )

         })
 )

})



const options = {
 ignoreSearch: true,
 ignoreMethod: true,
 ignoreVary: true
};


this.addEventListener('fetch', (event) => {
 if (!navigator.onLine) {
     event.respondWith(
         caches.match(event.request, options)
             .then((response) => {
                 if (response) {
                     console.log(response)
                     return (response)
                 } else {
                     return fetch(event.request).then((response) => {
                         if (!response || response.status !== 200 || response.type !== 'basic') {
                             console.log(response)
                             return response;
                         }
                         var responseToCache = response.clone();

                         caches.open(CACHE_NAME).then((cache) => {
                             cache.put(event.request, responseToCache)
                         })
                         console.log(response)
                         return response;

                     }).catch((err) => {
                         console.log('err', err)
                     })

                 }

             }).catch((err) => {
                 console.log('err', err)

             })
     )
 }

})
