'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e98076affd08524cd6754ff3b7f979dc",
"assets/assets/images/call.svg": "4be40dcb55a1a260cf5f627bd87cd74f",
"assets/assets/images/Dropdown01.png": "76a04a10a4a65c8160d9112c884e109d",
"assets/assets/images/Dropdown02.png": "8c1d9e379c5226c7f5b0cbbdb44a2d81",
"assets/assets/images/Dropdown03.png": "bc50a1c769dee15a60ce23877cf6f47f",
"assets/assets/images/Dropdown04.png": "17ff007f282b4278ec49584781f26d14",
"assets/assets/images/Dropdown05.png": "df0fa2685e233a0cdb9c44ea772320b9",
"assets/assets/images/Dropdown06.png": "306595db563583cd181eb8a0bf8d21d3",
"assets/assets/images/Dropdown07.png": "e897e2027bf7ab2552e0e9d33a0bf103",
"assets/assets/images/edit.svg": "4718b2f05c00470f121a636dfbb66908",
"assets/assets/images/emoji-happy.svg": "0f10b651f14ff0e32fa3e88794f15f04",
"assets/assets/images/graph.png": "7c81e35887b3bd90e825d8ea4177c4c2",
"assets/assets/images/home.png": "1bd616b5a472e7db35c9bbeb7fbe32fc",
"assets/assets/images/info-circle.svg": "06712db917669ed5c28ad93c4fd17bdf",
"assets/assets/images/item01.svg": "a270de93c981fbb2ef0dcc331192ea1f",
"assets/assets/images/item02.svg": "e580a745df4ffca7072a74d163d6358e",
"assets/assets/images/item03.svg": "336d5aa9da6ca9c8923d4538936625cd",
"assets/assets/images/logo70.png": "556a24ffcc5a0355381f9d8f1868c752",
"assets/assets/images/logo700.png": "abeadac1e4c38f40a8f1e89bf7704b19",
"assets/assets/images/logoTruksea.svg": "4b47868fc31ee908e9638ac1e8e0b1e2",
"assets/assets/images/logowithtext.png": "954fb979bd2b0dfd1476b0758fd014cb",
"assets/assets/images/map.png": "5df7283a63619d43921b103fc0a351b1",
"assets/assets/images/mapFleet.png": "ac416965636f55f858d8ab490c79b55b",
"assets/assets/images/menu02.svg": "27084d7a570b165bb0c763be33f3ebc5",
"assets/assets/images/menu1.svg": "f84fee9ab54a2af68d778ac15aece255",
"assets/assets/images/menu2.svg": "3bfc540729d909db77756108ba2c235f",
"assets/assets/images/menu3.svg": "0f6417220cc421b2725f86619ed35b32",
"assets/assets/images/menu4.svg": "5540d86210ffa2d38ab5cd8d8d1a6345",
"assets/assets/images/menu5.svg": "acb7e27de384889ec5e34efc3b67c588",
"assets/assets/images/menu6.svg": "71522ef314429203de97feea49ce0899",
"assets/assets/images/menu7.svg": "2aa180ad18433f3800407c43092bc8ed",
"assets/assets/images/menu8.svg": "7e612d079493b34a9b11f411160b015a",
"assets/assets/images/menu9.svg": "fcfca95b8ba85162bf5256dcd293d5e3",
"assets/assets/images/message-text.svg": "f06def8d6abaf6e3fa217dd1527fbb85",
"assets/assets/images/more.svg": "1a3f56b2cd5980e5a8cfd7e7c9f00862",
"assets/assets/images/more_horizontal.svg": "5e07f94277d7ac56e9113bba88a150dd",
"assets/assets/images/notification.svg": "69db0f9dea58992abb88674307a6b0d5",
"assets/assets/images/paperclip.svg": "2b85b6b56b203c8287e54a499e1bbf55",
"assets/assets/images/photo1.jpg": "8919c83cfb6ca5a6106c2841ae065056",
"assets/assets/images/photo2.jpg": "8b69cc14acbdd21b279403cbcfa37ac2",
"assets/assets/images/photo3.jpg": "e15fc31e4ed05eb4370c40f1e765131e",
"assets/assets/images/photo4.jpg": "28b8b952e3faf30125d56b8c5f47c532",
"assets/assets/images/photo5.jpg": "4415164461b5175e14d55b6f40470faa",
"assets/assets/images/photo6.jpg": "fcc4a2d57e985be46673cc5107ed39ef",
"assets/assets/images/rotate-right.svg": "da99c855b637c6b291e4edd41ad84e43",
"assets/assets/images/search-normal.svg": "f11b4f5f4ccfa37b8d8e774b887a4421",
"assets/assets/images/send-2.svg": "1ecbb5105db4e1b404b2872691accab1",
"assets/assets/images/setting-2.svg": "3bba7efbacbbe5b2535dc88e3b03054f",
"assets/assets/images/sms.svg": "e51417ad3560232e19e0b7aa876a0fdb",
"assets/assets/images/timeline.png": "ab4467fbc6b210f081a2af20611a9588",
"assets/assets/images/total_revenure.png": "f0097f111121a1e183bbc5b312df312b",
"assets/assets/images/trip_by_weekday.png": "1243d0c1d0478edfa17b178a478cf085",
"assets/assets/images/vehicle.png": "13981d8998b2560ac22d5a8b1f9eb0c3",
"assets/FontManifest.json": "209e66e2f71c646cc7eb744ea1cea0dc",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "9330bbd9207b0a1f0983a7b95034979c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_charts/google_fonts/Comforter-Regular.ttf": "cff123ea94f9032380183b8bbbf30ec1",
"assets/packages/timezone/data/latest_all.tzf": "d34414858d4bd4de35c0ef5d94f1d089",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.ico": "9c3d0de10b343d3f0d15e389fbb7a1a0",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e32d96214e8c118924fe91ef29c421ac",
"/": "e32d96214e8c118924fe91ef29c421ac",
"main.dart.js": "941ce2b7ef9a35f5f4240bb143245ff2",
"manifest.json": "e5f0a16a77130d600b25af58cef1c413",
"version.json": "e8714e7b1742cbdad8f088ce1fcd0326"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
