console.log('registered')


var CACHE_NAME = 'quiz-web-new'
var urlsToCache = [

    '/static/js/1.chunk.js',
    '/static/js/bundle.js',
    '/static/js/main.chunk.js', 
    '/static/js/2.2f87d904.chunk.js',
    '/static/js/main.4859b9f0.chunk.js'
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
