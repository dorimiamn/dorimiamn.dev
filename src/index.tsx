import { Hono } from "hono";
import styles from "./style.css?url";

const app = new Hono();

app.get("/api/clock", (c) => {
	return c.json({
		time: new Date().toLocaleTimeString(),
	});
});

app.get("/", (c) => {
	return c.html(
		<html lang="ja">
			<head>
				<link href="/static/style.css" rel="stylesheet" />
				<link rel="stylesheet" href={styles} />
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
	);
});

export default app;
