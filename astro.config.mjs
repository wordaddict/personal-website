// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
      preview: {
        host: '0.0.0.0',
        port: Number(process.env.PORT || 4321),
        allowedHosts: ['personalwe-059c4b0c0362.herokuapp.com']
      }
    }
  });
