import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  image: {
    service: "compile", // handles the "sharp" warning safely
  },
  build: {
    inlineStylesheets: "never", // reduces memory footprint
  },
});
