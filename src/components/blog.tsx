import { Buffer } from "node:buffer";
import { createHash } from "node:crypto";
import fs from "node:fs";

export function base64Encode(str: string): string {
	return Buffer.from(str).toString("base64");
}

export function md5Hash(str: string): string {
	return createHash("md5").update(str).digest("hex");
}

export default function BlogList() {
	const files = fs.readdirSync("md").map((file) => file.replace(/\.md$/, ""));
	const titlesAndFiles = files.map((file) => {
		const content = fs.readFileSync(`md/${file}.md`, "utf-8");
		const title = content.match(/^# (.+)$/m)?.[1] ?? file;
		return { title, file };
	});
	return (
		<div class="container mx-auto my-10">
			<h1 className="text-2xl text-center">Blog</h1>
			<ul>
				{titlesAndFiles.map(({ title, file }) => (
					<li key={md5Hash(file)}>
						<a href={`blog/${md5Hash(file)}`}>{title}</a>
					</li>
				))}
			</ul>
		</div>
	);
}
