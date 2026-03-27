import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["offline.svg"],
      manifest: {
        name: "Simulador de examen de maestria de gatisifu",
        short_name: "gatisifu",
        description: "Simulador de examen de maestria de gatisifu",
        theme_color: "#001562",
        background_color: "#f5f7fc",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "offline.svg",
            sizes: "512x512",
            type: "image/svg+xml",
            purpose: "any"
          }
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,json}"],
        navigateFallback: "/index.html",
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === "document",
            handler: "NetworkFirst",
            options: {
              cacheName: "pages-cache"
            }
          },
          {
            urlPattern: ({ url }) => url.pathname.includes("preguntas.json"),
            handler: "CacheFirst",
            options: {
              cacheName: "questions-cache"
            }
          }
        ]
      }
    })
  ]
});
