import react from '@vitejs/plugin-react-swc'
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteCompression({ algorithm: "brotliCompress" }) // compress assets
  ],
  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: ['www.ozmediaplanet.com', 'ozmediaplanet.com']
  },
  build: {
    target: "esnext",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) return "vendor";
        },
      },
    },
  },
});
