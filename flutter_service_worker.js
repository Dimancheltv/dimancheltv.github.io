'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0361c3d1e937d9cd3c168f02a9f5d2ea",
"version.json": "139c4f7d8b4d19730c9175120dc4b6a1",
"favicon.ico": "b08e3902436f2c02c498bbf98264e54d",
"index.html": "be05757373868867c391d69a8749d717",
"/": "be05757373868867c391d69a8749d717",
"main.dart.js": "788f268402471b5d356c0cded6fd3c25",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"logo_animation.svg": "c1b8fca4afe2a48e3be23a833ac193fc",
"favicon.png": "4f73902f8150f1bffcd1540980bef38e",
"icons/Icon-192.png": "a5198edbd0a95cb251e2270564575d77",
"icons/logo.svg": "66bd74cc649910e5b2dc750b86ef3eb0",
"icons/Icon-512.png": "a9e3e5dfabe14aed0b8a24b1b00f9152",
"manifest.json": "f25ae5eec13e4ac33262510b63e81432",
"assets/AssetManifest.json": "560677ac6cb41a64e43bc65c21098ba4",
"assets/NOTICES": "42c977f804523e6187d9eed6560bb9a6",
"assets/FontManifest.json": "c5238a9df6770f15fb4677c696cfca5f",
"assets/AssetManifest.bin.json": "3e3910e97e2ffac14c85fff94d8f77a9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e18f87f7109616699cb5077e04ce2cfc",
"assets/fonts/MaterialIcons-Regular.otf": "78bb3914fbeddd484897f38ed351cf4e",
"assets/assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/assets/rive/deus.riv": "66a2d5696ea3e7ca52b2e4c8d59bcdc2",
"assets/assets/icons/list.svg": "29092f5e645ad6a2e2950d8d343ef341",
"assets/assets/icons/legend/manual_mode.svg": "ee9eafdc56d5c960fe1bba3740dfe6ba",
"assets/assets/icons/legend/charging_station.svg": "b971d295a979ceabf4f16a156030efa8",
"assets/assets/icons/legend/road.svg": "2862cb3023b64d85ade6e73538a9e563",
"assets/assets/icons/legend/without_edge.svg": "6f5ef81744e09d42e1be417434956de4",
"assets/assets/icons/legend/entry_point.svg": "67e6eea2835173967ddf39a908d8d96c",
"assets/assets/icons/legend/charger_is_out.svg": "68fb438c514c0011f0c97164310ce433",
"assets/assets/icons/legend/non_active.svg": "05f0b0fc8ad1ec6d2b5f03aa0bff64c3",
"assets/assets/icons/legend/215.svg": "77439249e59aedc2d6b1d50be3b2a587",
"assets/assets/icons/legend/rack_robot.svg": "b4809421ee22f69dcb9a6f678b6af3bc",
"assets/assets/icons/legend/loading.svg": "46711abbbeb4208ff27cf3df0aa29ca3",
"assets/assets/icons/legend/charger_maintenance.svg": "fad9c41307dc7028e8ca9cf6328d7a1e",
"assets/assets/icons/legend/obstacle.svg": "77b0ece8c0269435e501135ad92688f7",
"assets/assets/icons/legend/non-register.svg": "8fcbb605027b4a6cb3945f0744469531",
"assets/assets/icons/legend/scanning_point.svg": "0dd0e83040fb10f312c324dad6dd9ddd",
"assets/assets/icons/legend/blocked.svg": "73e343b7fab851149d748a3adc2787a9",
"assets/assets/icons/legend/327.svg": "df2377c3c22ac8f8d58ec44a1d3a57a2",
"assets/assets/icons/legend/storage.svg": "f8b61509cc6b2e03cf50acd2fa77f777",
"assets/assets/icons/legend/charging.svg": "e86c18f78bee1a31952ba025c7f2bae8",
"assets/assets/icons/legend/rack_carrier.svg": "5444a27c27488694d86603620dfd63fd",
"assets/assets/icons/legend/deregistration.svg": "a4a2f1dddc527a3d41e6a7ab7a1a165e",
"assets/assets/icons/legend/parking.svg": "d5aa4586bcc1535a904cc4c57e8a644a",
"assets/assets/icons/legend/invalid.svg": "36cf6e6d4624df4cb6a3361636b09d20",
"assets/assets/icons/legend/rack.svg": "3f63168494aaa8765e46d17486c1972e",
"assets/assets/icons/legend/magic_point.svg": "21f50ebc73a3768bd1b3bf28ae973108",
"assets/assets/icons/legend/2142.svg": "5538a4db5c2b1c184d8f7cb28ce1406c",
"assets/assets/icons/menu_dashboard.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/map.svg": "636423037a12ee7892b94267fb60ff3c",
"assets/assets/icons/settings.svg": "8a9e0cf8e96cfc658a0b2d5361177bf6",
"assets/assets/icons/dashboard.svg": "047c75167e3e57ef8a48514867ea2577",
"assets/assets/icons/logo_animation.svg": "c1b8fca4afe2a48e3be23a833ac193fc",
"assets/assets/icons/red_charge.svg": "d1f00bd4ef3097dabe477b99916598a5",
"assets/assets/icons/green_charge.svg": "3c56089ed4e687c44ec5cf5e2db37f2a",
"assets/assets/icons/notification.svg": "0911e7b8ce015946a4f597173f4cbffb",
"assets/assets/icons/robot.svg": "072ee7510115eecd7e9c36d849e6c524",
"assets/assets/icons/logo.svg": "66bd74cc649910e5b2dc750b86ef3eb0",
"assets/assets/fonts/Roboto-Regular.ttf": "327362a7c8d487ad3f7970cc8e2aba8d",
"assets/assets/fonts/Roboto-Bold.ttf": "2e9b3d16308e1642bf8549d58c60f5c9",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
