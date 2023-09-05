import { resolve } from "path";
import { defineConfig } from "vite";

const outDir = resolve(__dirname, "dist");
process.env.BROWSER = "CHROME";

// Vite doesn't build prod if *.html include inline css. Need to link external css
export default defineConfig({
  base: "", //required to append the correct relative paths to modules and linked stylesheets
  root: ".",
  preview: {
    port: 5000,
  },
  server: {
    port: 8080,
    open: "chrome --incognito",
  },
  build: {
    assetsDir: ".",
    cssCodeSplit: false,
    outDir,
    reportCompressedSize: true,
    rollupOptions: {
      input: {
        main: "./index.html",
        CollisionDetection: "/src/CollisionDetection/index.html",
        CollisionDetection2: "/src/CollisionDetection_2/index.html",
      },
    },
  },
});
