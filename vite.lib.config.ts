import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "FormEngine",
      fileName: "index",
      formats: ["es", "cjs"],
    },
    outDir: "dist-lib",
    emptyOutDir: true,
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
