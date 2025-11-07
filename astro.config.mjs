import { defineConfig } from "astro/config";
import staticAdapter from "@astrojs/static";

export default defineConfig({
  adapter: staticAdapter(),
  image: {
    service: "astro/assets/services/sharp", // optional if you use images
  },
});
