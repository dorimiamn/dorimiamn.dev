import { useState } from "hono/jsx/dom";
import { createRoot } from "hono/jsx/dom/client";
import { Profile } from "./clients/profile";

function App() {
	return (
		<>
			<h1>Hello, Hono with JSX!</h1>
			<h2>Example of useState()</h2>
			<Counter />
			<h2>Example of API fetch()</h2>
			<Profile />
		</>
	);
}

function Counter() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<p>Count: {count}</p>
			<button type="button" onClick={() => setCount(count + 1)}>
				Increment
			</button>
		</div>
	);
}

// biome-ignore lint/style/noNonNullAssertion: DOM ノードは存在するはずなので
const domNode = document.getElementById("root")!;
const root = createRoot(domNode);
root.render(<App />);
