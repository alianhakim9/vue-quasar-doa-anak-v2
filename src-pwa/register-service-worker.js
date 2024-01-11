import { register } from "register-service-worker";

register({
  ready() {
    console.log("Service Worker is active.");
  },
  registered() {
    console.log("Service Worker has been registered.");
  },
  cached() {
    console.log("Content has been cached for offline use.");
  },
  updatefound() {
    console.log("New content is downloading.");
  },
  updated() {
    console.log("New content is available; please refresh.");
  },
  offline() {
    console.log(
      "No internet connection found. App is running in offline mode."
    );
  },
  error(error) {
    console.error("Error during Service Worker registration:", error);
  },
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.ready.then((registration) => {
    registration.periodicSync.register("periodic-sync", {
      minInterval: 24 * 60 * 60 * 1000, // 24 hours (adjust as needed)
    });
  });
}
