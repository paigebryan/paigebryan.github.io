import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  base: "./",

  build: {
    outDir: "dist",
    sourcemap: true,

    rollupOptions: {
      input: {
        home: resolve(
          __dirname,
          "index.html"
        ),

        work: resolve(
          __dirname,
          "work/index.html"
        ),

        nasa: resolve(
          __dirname,
          "work/nasa/index.html"
        ),

        blueOrigin: resolve(
          __dirname,
          "work/blue-origin/index.html"
        ),

        exxonMobil: resolve(
          __dirname,
          "work/exxonmobil/index.html"
        ),

        johnDeere: resolve(
          __dirname,
          "work/john-deere/index.html"
        ),

        about: resolve(
          __dirname,
          "interests/index.html"
        ),

        contact: resolve(
          __dirname,
          "contact/index.html"
        ),

        resume: resolve(
          __dirname,
          "resume/index.html"
        )
      }
    }
  }
});