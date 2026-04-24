import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/P2462',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
});
