import build from "@hono/vite-build/cloudflare-pages";
import devServer from "@hono/vite-dev-server";
import adapter from "@hono/vite-dev-server/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
	if (mode === "client") {
		return {
			build: {
				rollupOptions: {
					input: "./src/client.tsx",
					output: {
						dir: "./dist/static",
						entryFileNames: "client.js",
					},
				},
				copyPublicDir: false,
			},
		};
	}
	return {
		plugins: [
			build(),
			devServer({
				adapter,
				entry: "src/index.tsx",
			}),
			tailwindcss(),
		],
	};
});
