import type { PropsWithChildren, ReactElement } from "react";
import { ThemeProvider } from "./ThemeProvider";
import { ConnectionProvider } from "./ConnectionProvider";
import { CssBaseline } from "@mui/material";
import {
  type Config,
  ConfigProvider,
  ConfigSchema,
  DefaultConfig,
  useConfig,
} from "./ConfigProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { parse } from "valibot";

export interface Props {}

export function Providers({
  children,
}: PropsWithChildren<Props>): ReactElement {
  return (
    <SetupConfigProvider>
      <SetupConnectionProvider>
        <SetupQueryClientProviders>
          <ThemeProvider>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </SetupQueryClientProviders>
      </SetupConnectionProvider>
    </SetupConfigProvider>
  );
}

function SetupConfigProvider({
  children,
}: PropsWithChildren<Props>): ReactElement {
  const data = location.search.slice(1);
  let initial: Config = DefaultConfig;
  if (data !== "") {
    const decoded = atob(data);
    const config = JSON.parse(decoded);
    initial = parse(ConfigSchema, config);
  }

  return <ConfigProvider initial={initial}>{children}</ConfigProvider>;
}

function SetupConnectionProvider({
  children,
}: PropsWithChildren<Props>): ReactElement {
  const { network } = useConfig();
  return (
    <ConnectionProvider endpoint={network.endpoint}>
      {children}
    </ConnectionProvider>
  );
}

function SetupQueryClientProviders({
  children,
}: PropsWithChildren<Props>): ReactElement {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
