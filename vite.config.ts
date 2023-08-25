import { resolve } from "path";
import { defineConfig } from "vite";

const outDir = resolve(__dirname, "dist");

export default defineConfig({
  //production preview port
  preview: {
    port: 5000,
  },
  server: {
    port: 8080,
  },
  build: {
    outDir,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        cd: resolve(__dirname, "src/CollisionDetection/index.html"),
        cdv2: resolve(__dirname, "src/CollisionDetection_2/index.html"),
      },
    },
  },
});