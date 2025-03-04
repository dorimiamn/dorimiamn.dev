import fs from "node:fs";
import { Hono } from "hono";
import type { FC } from "hono/jsx";
import { renderToString } from "hono/jsx/dom/server";

import markdownIt from "markdown-it";

import BlogList from "./components/blog";
import { md5Hash } from "./components/blog";
import Header from "./components/header";
import Profile from "./components/profile";

const md = markdownIt();

const Layout: FC = (props) => {
	return (
		<html lang="ja">
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
			<body>
				<Header />
				{props.children}
			</body>
		</html>
	);
};

const app = new Hono();

app.get("/api/clock", (c) => {
	return c.json({
		time: new Date().toLocaleTimeString(),
	});
});

app.get("/", (c) => {
	return c.html(
		<Layout>
			<Profile />
		</Layout>,
	);
});

app.get("/blog", (c) => {
	return c.html(
		<Layout>
			<BlogList />
		</Layout>,
	);
});

app.get("/blog/:id", (c) => {
	const blogIdHash = c.req.param("id");
	const filesAndHashes = fs.readdirSync("md").map((file) => {
		const fileName = file.replace(/\.md$/, "");
		const fileHash = md5Hash(fileName);
		return { fileName, fileHash };
	});

	const target = filesAndHashes.find(({ fileHash }) => fileHash === blogIdHash);

	if (!target) {
		return c.notFound();
	}

	const file = fs.readFileSync(`md/${target.fileName}.md`, "utf-8");
	const blog = md.render(file);

	return c.html(
		<Layout>
			<div class="container mx-auto my-20">
				<article>
					{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
					<div dangerouslySetInnerHTML={{ __html: blog }} />
				</article>
			</div>
		</Layout>,
	);
});

app.notFound((c) => {
	return c.html(
		<Layout>
			<div class="container mx-auto my-20">
				<h1 className="text-2xl text-center">404 Not Found</h1>
			</div>
		</Layout>,
	);
});

export default app;
