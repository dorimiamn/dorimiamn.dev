import devServer from "@hono/vite-dev-server";
import adapter from "@hono/vite-dev-server/cloudflare";
import ssg from "@hono/vite-ssg";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig(() => {
	return {
		plugins: [
			tailwindcss(),
			ssg(),
			devServer({
				adapter,
				entry: "src/index.tsx",
			}),
		],
		build: {
			rollupOptions: {
				input: ["src/style.css", "src/client.tsx"],
				output: {
					dir: "dist/static",
					entryFileNames: "client.js",
					assetFileNames: "client.css",
				},
			},
		},
	};
});
