import { registerSW } from "virtual:pwa-register";

export function registerSWWithPrompt() {
  let hasReloaded = false;
  const updateSW = registerSW({
    immediate: true,
    onNeedRefresh() {
      updateSW(true);
    },
    onOfflineReady() {
      console.info("La aplicacion esta lista para uso offline.");
    }
  });

  if (typeof window !== "undefined") {
    window.navigator.serviceWorker?.addEventListener("controllerchange", () => {
      if (hasReloaded) return;
      hasReloaded = true;
      window.location.reload();
    });
  }
}
