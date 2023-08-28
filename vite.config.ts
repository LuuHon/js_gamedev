import { resolve } from "path";
import { defineConfig } from "vite";

const outDir = resolve(__dirname, "docs");

// Vite doesn't build prod if *.html include inline css. Need to link external css
export default defineConfig({
  //production preview port
  root: __dirname,

  preview: {
    port: 5000,
  },
  server: {
    port: 8080,
  },
  build: {
    cssCodeSplit: false,
    outDir,
    reportCompressedSize: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        cd: resolve(__dirname, "src/CollisionDetection/index.html"),
        cdv2: resolve(__dirname, "src/CollisionDetection_2/index.html"),
      },
    },
  },
});
