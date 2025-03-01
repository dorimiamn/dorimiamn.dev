import { Hono } from "hono";
import { renderToString } from "hono/jsx/dom/server";

import Header from "./components/header";

function HeadContent() {
	return (
		<head>
			{import.meta.env.PROD ? (
				<link rel="stylesheet" href="/static/style.css" />
			) : (
				<link rel="stylesheet" href="/src/style.css" />
			)}
			{import.meta.env.PROD ? (
				<script type="module" src="/static/client.js" />
			) : (
				<script type="module" src="/src/client.tsx" />
			)}
			<link
				rel="shortcut icon"
				href="/static/favicon.ico"
				type="image/x-icon"
			/>
			<title>Dorimiamn's Site</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		</head>
	);
}

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
				<HeadContent />
				<body>
					<div id="root" />
				</body>
			</html>,
		),
	);
});

app.notFound((c) => {
	return c.html(
		renderToString(
			<html lang="ja">
				<HeadContent />
				<body>
					<Header />
					<div class="container mx-auto my-20">
						<h1 className="text-2xl text-center">404 Not Found</h1>
					</div>
				</body>
			</html>,
		),
	);
});

export default app;
