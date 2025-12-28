import { defineConfig } from 'vite';
import honox from 'honox/vite';
import tailwindcss from '@tailwindcss/vite';
import ssg from "@hono/vite-ssg";
import build from "@hono/vite-build/cloudflare-workers";
import client from "honox/vite/client";
import adapter from "@hono/vite-dev-server/cloudflare";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      plugins: [
        tailwindcss(),
        client({
          input: ["/app/client.ts", "/app/style.css"],
        }),
      ],
    };
  }
  return {
    plugins: [
      honox({
        devServer: { adapter },
        client: {
          input: [
            "/app/client.ts",
            '/app/style.css', // add the style file entrypoint
          ],
        },
      }),
      tailwindcss(),
      build(),
      ssg({
        entry: "/app/server.ts",
      }),
    ],
  }
});
