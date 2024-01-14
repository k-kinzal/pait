import { ThemeProvider } from "./providers/Theme";
import { CssBaseline } from "@mui/material";
import { MainPage } from "./pages/MainPage/MainPage";

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
