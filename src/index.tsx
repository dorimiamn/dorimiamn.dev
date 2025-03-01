import { Hono } from "hono";
import type { FC } from "hono/jsx";
import { renderToString } from "hono/jsx/dom/server";

import markdownit from "markdown-it";

import Header from "./components/header";
import Profile from "./components/profile";

const md = markdownit();

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

// ブログ記事一覧を取得
app.get("/api/blog", (c) => {
	const blogs = [
		{ id: 1, title: "ブログ記事1", summary: "これはブログ記事1の概要です。" },
		{ id: 2, title: "ブログ記事2", summary: "これはブログ記事2の概要です。" },
	];
	return c.json({
		blogs,
	});
});

// ブログ記事を取得
app.get("/api/blog/:id", (c) => {
	const blog = md.render(`
# これはブログ記事です

これはブログ記事の内容です。
  `);
	return c.json({
		blog,
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
			<div class="container mx-auto my-10">
				<h1 className="text-2xl text-center">Blog</h1>
				<ul>
					<li>
						<a href="/blog/1">ブログ記事1</a>
					</li>
					<li>
						<a href="/blog/2">ブログ記事2</a>
					</li>
				</ul>
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
