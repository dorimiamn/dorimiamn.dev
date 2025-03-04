import { Hono } from "hono";
import type { FC } from "hono/jsx";

import { ssgParams } from "hono/ssg";
import Header from "./components/header";
import Profile from "./components/profile";

import renderBlog from "./lib/blog";

const blogs = renderBlog();

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
				<h1 class="text-2xl text-center">Blog</h1>
				<ul class="mt-8">
					{blogs.map(({ title, id }) => (
						<li key={id}>
							<a href={`blog/${id}`}>{title}</a>
						</li>
					))}
				</ul>
			</div>
		</Layout>,
	);
});

app.get(
	"/blog/:id",
	ssgParams(async () => {
		return blogs.map(({ id }) => {
			return {
				id: id,
			};
		});
	}),
	(c) => {
		const blogIdHash = c.req.param("id");
		const blog = blogs.find(({ id }) => id === blogIdHash);

		if (!blog) {
			return c.notFound();
		}

		return c.html(
			<Layout>
				<div class="container mx-auto my-20">
					{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
					<article
						class="blog"
						dangerouslySetInnerHTML={{ __html: blog.content }}
					/>
				</div>
			</Layout>,
		);
	},
);

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
