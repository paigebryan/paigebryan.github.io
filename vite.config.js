import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  base: "./",
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        work: resolve(__dirname, "work/index.html"),
        nasa: resolve(__dirname, "work/nasa/index.html"),
        blueOrigin: resolve(__dirname, "work/blue-origin/index.html"),
        johnDeere: resolve(__dirname, "work/john-deere/index.html"),
        leadership: resolve(__dirname, "leadership/index.html"),
        coursework: resolve(__dirname, "coursework/index.html"),
        interests: resolve(__dirname, "interests/index.html"),
        resume: resolve(__dirname, "resume/index.html")
      }
    }
  }
});
