let cacheData = "appV1";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([

                '/static/js/bundle.js',
                // '/static/css/main.chunk.css',
                // '/bootstrap.min.css',
                '/index.html',
                '/',
                '/ws.js',
                'ws',
                "/users"
            ])
        })
    )
})

this.addEventListener("fetch",(event)=>{
event.respondWith(
    caches.match(event.request)
    .then((resp)=>{
            if(resp)
            {
                return resp;
            }
    })
)
})


// let cacheName = 'userSettings';
// let url = '/api/get/userSettings';
// fetch(url).then(res => {
//   return caches.open(cacheName).then(cache => {
//     return cache.put(url, res);
//   })
// })

// self.addEventListener('install', event => {
//     event.waitUntil(
//       caches.open('my-cache')
//         .then(cache => cache.add('index.html'))
//     );
//   });
  
//   self.addEventListener('fetch', event => {
//     // Make sure this is a navigation request before responding.
//     if (event.request.mode === 'navigation') {
//       event.respondWith(
//         caches.match(event.request) || fetch(event.request)
//       );
//     }
//   });