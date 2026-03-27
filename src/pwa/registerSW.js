import { registerSW } from "virtual:pwa-register";

export function registerSWWithPrompt() {
  const updateSW = registerSW({
    onNeedRefresh() {
      const shouldRefresh = window.confirm("Hay una nueva version disponible. ¿Actualizar ahora?");
      if (shouldRefresh) {
        updateSW(true);
      }
    },
    onOfflineReady() {
      console.info("La aplicacion esta lista para uso offline.");
    }
  });
}
