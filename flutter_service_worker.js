'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "7a112f1c889271c4c9ef80d0ca5a3674",
"index.html": "345b278e7887a974efdeb035d9dfbd6a",
"/": "345b278e7887a974efdeb035d9dfbd6a",
"main.dart.js": "7dcee87f6e1cf633ebf30e4072e953f7",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "26e0501ca4cde97d2ec825f6de49bbb2",
"assets/AssetManifest.json": "329dacb28b1bbb374868e2d4e2dccccc",
"assets/NOTICES": "2af11238da955983486cf5d2f2386136",
"assets/FontManifest.json": "ee330b453adffc411cf5399c36204ecb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "f497234433ac8d52bfe0ed3f5134713c",
"assets/AssetManifest.bin": "9e555dd4f688280becbf12380caddfde",
"assets/fonts/MaterialIcons-Regular.otf": "8a5101a261d8c499eb4a999a66703b72",
"assets/assets/maps/bc_map_v11.yaml": "b44b82215900fa26af2d1663d29de76e",
"assets/assets/maps/ff_all_v2.yaml": "3653d377d600866e1d9b5ae4b101f0d4",
"assets/assets/maps/bc_all_v1.yaml": "ea248765967287f4bd5882fbeb463451",
"assets/assets/maps/test_map.yaml": "6b77399078cab957a9606e572646a3dc",
"assets/assets/maps/map-format.txt": "84dfb7300ba2789e3042d3eb3e0ed39c",
"assets/assets/maps/ff_map_v2.yaml": "198b058ffd7cdd2f3d61d7d949d77042",
"assets/assets/maps/bc_tags_v9.yaml": "e11927df5938cbe4aa8619a39b536537",
"assets/assets/maps/ff_tags_v1.yaml": "c4de70bd69882ba2f7dc0d1c896e6879",
"assets/assets/maps/new_map.yaml": "b46eeff5b1036191c30febc44ae1b4f8",
"assets/assets/icons/blocked_rotation.svg": "61c640039a49719627c3a2ce87c5b630",
"assets/assets/icons/bidirectional_edge.svg": "42f050e98d11b69f8068917296d3d114",
"assets/assets/icons/decart.svg": "fa60c85f4d0e6128faf696cc0f7c1fa7",
"assets/assets/icons/bidirectional_arrow.svg": "c93eafd7d7eaba999eb19d4dbd7e0379",
"assets/assets/icons/right_arrow.svg": "57ac50642bb21d80b055eba0b02282f0",
"assets/assets/icons/left_arrow.svg": "7f0ef7f3a170ede8aa9211c5895cc19b",
"assets/assets/icons/new_map_icon.svg": "c2e833aebbc6db1506104a60c8f5f6f0",
"assets/assets/icons/check_icon.svg": "cc389c03ee91a246f6534858b1088908",
"assets/assets/icons/open_map_icon.svg": "614c119cb0154a21e42ad6a985368380",
"assets/assets/icons/save_icon.svg": "5f6010a9938e85af1abd7eccf375921a",
"assets/assets/icons/options.svg": "426b7303faf71cadd82070cf3e97757a",
"assets/assets/icons/oneway_edges.svg": "17daf198aab7421be980b543e9d0262a",
"assets/assets/icons/cancel_icon.svg": "2684107a3e5f885774ccd6da91f6cc36",
"assets/assets/icons/print.svg": "70c8213dff609a742e082dd3dfa5282e",
"assets/assets/fonts/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
