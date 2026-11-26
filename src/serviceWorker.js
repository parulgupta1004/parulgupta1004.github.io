// Retire any service worker from older deployments so visitors receive updates.
export function unregister() {
  if (!("serviceWorker" in navigator)) return;
  navigator.serviceWorker
    .getRegistration()
    .then((registration) => registration?.unregister())
    .catch((error) => console.warn("Could not retire the old service worker:", error));
}
