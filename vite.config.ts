import devServer from "@hono/vite-dev-server";
import adapter from "@hono/vite-dev-server/cloudflare";
import ssg from "@hono/vite-ssg";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const entry = "src/index.tsx";

export default defineConfig(() => {
	return {
		plugins: [
			devServer({
				adapter,
				entry: entry,
			}),
			ssg({ entry: entry }),
			tailwindcss(),
		],
		build: {
			rollupOptions: {
				input: "src/style.css",
				output: [
					{
						assetFileNames: "static/style.css",
					},
				],
			},
		},
	};
});
