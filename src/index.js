import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import en from "./i18n/en";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<App i18n={en} />
	</StrictMode>
);