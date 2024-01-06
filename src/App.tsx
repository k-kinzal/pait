import { ThemeProvider } from "./providers/Theme.tsx";
import { CssBaseline } from "@mui/material";
import { MainPage } from "./pages/MainPage/MainPage.tsx";

function App() {
	return (
		<ThemeProvider>
			<CssBaseline />
			<MainPage />
		</ThemeProvider>
	);
}

export default App;
