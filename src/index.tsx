import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";

// biome-ignore lint/style/noNonNullAssertion: root element is always present
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<CssBaseline>
			<App />
		</CssBaseline>
	</React.StrictMode>,
);
