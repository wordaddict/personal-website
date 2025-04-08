// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        preview: {
          allowedHosts: ['personalwe-059c4b0c0362.herokuapp.com']
        }
      }
});
