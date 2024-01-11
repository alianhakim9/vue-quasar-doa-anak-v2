/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.config.js > pwa > workboxPluginMode is set to "InjectManifest"
 */

import { precacheAndRoute } from "workbox-precaching";

// Use with precache injection
precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener("sync", (event) => {
  if (event.tag === "sync-example") {
    event.waitUntil(syncDataWithServer());
  }
});

function syncDataWithServer() {
  // Implement your synchronization logic here
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then((registration) => {
      console.log("Service Worker registered with scope:", registration.scope);
    })
    .catch((error) => {
      console.error("Service Worker registration failed:", error);
    });
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.ready.then((registration) => {
    registration.sync.register("sync-example");
  });
}

self.addEventListener("sync", (event) => {
  if (event.tag === "periodic-sync") {
    event.waitUntil(doPeriodicSync());
  }
});

function doPeriodicSync() {
  // Implement your synchronization logic here
}
