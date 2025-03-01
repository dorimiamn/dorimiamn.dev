import { createRoot } from "hono/jsx/dom/client";
import { Profile } from "./clients/profile";

import Header from "./components/header";

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
