import { MainPage } from "./pages/MainPage/MainPage";
import { Providers } from "./providers/Providers";

export function App() {
  return (
    <Providers>
      <MainPage />
    </Providers>
  );
}
