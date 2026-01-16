import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/form-engine/", // your repo name
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: "dist-site", // demo output
  },
});
