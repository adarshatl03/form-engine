import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/form-engine/",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: "dist", // GitHub Pages output
  },
});
