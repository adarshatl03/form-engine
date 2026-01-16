import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "FormEngine",
      fileName: "index",
      formats: ["es"],
    },
    outDir: "dist", // npm output
    emptyOutDir: true,
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
