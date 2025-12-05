// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import staticAdapter from "@astrojs/static";

export default defineConfig({
  site: "https://example.com",
  output: "static",
  integrations: [mdx(), sitemap()],
  adapter: staticAdapter(),
});
