import { PropsWithChildren, ReactElement, useMemo } from "react";
import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MuiThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { themes } from "../theme";

export interface Props {
  scheme?: "light" | "dark";
}

export function ThemeProvider({
  scheme,
  children,
}: PropsWithChildren<Props>): ReactElement {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createTheme(
        themes[scheme || (prefersDarkMode ? "dark" : "light")] as ThemeOptions,
      ),
    [scheme, prefersDarkMode],
  );

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
