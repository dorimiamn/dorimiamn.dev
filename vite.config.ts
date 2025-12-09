import { defineConfig } from 'vite';
import honox from 'honox/vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    honox({
      client: {
        input: [
          '/app/style.css', // add the style file entrypoint
        ],
      },
  }), tailwindcss()],
})
