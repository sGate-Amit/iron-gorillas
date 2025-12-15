// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://example.com",
  output: "hybrid",
  adapter: cloudflare(),
  integrations: [mdx()],
  vite: {
    build: {
      sourcemap: false,
      minify: "esbuild",
    },
  },
});
