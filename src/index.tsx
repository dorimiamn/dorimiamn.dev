import { Hono } from "hono";
import { renderToString } from "hono/jsx/dom/server";

const app = new Hono();

app.get("/api/clock", (c) => {
	return c.json({
		time: new Date().toLocaleTimeString(),
	});
});

app.get("/", (c) => {
	return c.html(
		renderToString(
			<html lang="ja">
				<head>
					{import.meta.env.PROD ? (
						<link rel="stylesheet" href="/static/style.css" />
					) : (
						<link rel="stylesheet" href="/src/style.css" />
					)}
					<link
						rel="shortcut icon"
						href="/static/favicon.ico"
						type="image/x-icon"
					/>
					<title>Dorimiamn's Site</title>
				</head>
				<body>
					<div id="root" />
					{import.meta.env.PROD ? (
						<script type="module" src="/static/client.js" />
					) : (
						<script type="module" src="/src/client.tsx" />
					)}
				</body>
			</html>,
		),
	);
});

export default app;
