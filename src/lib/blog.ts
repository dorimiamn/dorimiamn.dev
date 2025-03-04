// ブログの convert 処理を行う

import { createHash } from "node:crypto";
import fs from "node:fs";
import Shiki from "@shikijs/markdown-it";
import MarkdownIt from "markdown-it";

type Blog = {
	title: string;
	content: string;
	id: string;
};

const md = new MarkdownIt();

md.use(
	await Shiki({
		themes: {
			light: "tokyo-night",
			dark: "vitesse-dark",
		},
	}),
);

function md5Hash(str: string): string {
	return createHash("md5").update(str).digest("hex");
}

export default async function renderBlog() {
	const blogs: Blog[] = [];
	const files = fs.readdirSync("md").map((file) => file.replace(/\.md$/, ""));
	for (const file of files) {
		const content = fs.readFileSync(`md/${file}.md`, "utf-8");
		const title = content.match(/^# (.+)$/m)?.[1] ?? file;
		const blog = md.render(content);
		const id = md5Hash(file);
		blogs.push({
			title: title,
			content: blog,
			id: id,
		});
	}
	return blogs;
}
