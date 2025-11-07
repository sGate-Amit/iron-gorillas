import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server', // Or 'hybrid' if you are using a mix of static and server-rendered pages
  adapter: cloudflare({
    imageService: 'compile', // This line configures the image service
  }),
  // You can also add image-related configurations here if needed,
  // for example, to define remote patterns for external images.
  // image: {
  //   remotePatterns: [
  //     { protocol: 'https', hostname: 'your-external-image-host.com' }
  //   ]
  // }
});
