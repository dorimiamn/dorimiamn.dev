import devServer from "@hono/vite-dev-server";
import adapter from "@hono/vite-dev-server/cloudflare";
import ssg from "@hono/vite-ssg";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
	if (mode === "client") {
		return {
			plugins: [tailwindcss(), ssg()],
		};
	}
	return {
		plugins: [
			ssg(),
			devServer({
				adapter,
				entry: "src/index.tsx",
			}),
			tailwindcss(),
		],
	};
});
