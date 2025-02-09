import { useState } from "hono/jsx/dom";
import { createRoot } from "hono/jsx/dom/client";
import { Profile } from "./clients/profile";

export default function Header() {
	return (
		<nav className="flex flex-row h-12 w-4/6 mx-auto my-4">
			<div className="basis-5/6">
				<a href="/">
					dorimiamn's <br /> Portfolio
				</a>
			</div>
			<div className="basis-1/6 text-center">
				<a href="/blog">Blog</a>
			</div>
		</nav>
	);
}

function App() {
	return (
		<>
			<header>
				<Header />
			</header>
			<Profile />
		</>
	);
}

// biome-ignore lint/style/noNonNullAssertion: DOM ノードは存在するはずなので
const domNode = document.getElementById("root")!;
const root = createRoot(domNode);
root.render(<App />);
