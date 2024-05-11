import { PropsWithChildren, ReactElement } from "react";
import { ThemeProvider } from "./ThemeProvider";
import { ConnectionProvider } from "./ConnectionProvider";
import { CssBaseline } from "@mui/material";
import { ConfigProvider, useConfig } from "./ConfigProvider";
import { QueryClient, QueryClientProvider } from "react-query";

export interface Props {}

export function Providers({
  children,
}: PropsWithChildren<Props>): ReactElement {
  return (
    <ConfigProvider>
      <InnerProviders>{children}</InnerProviders>
    </ConfigProvider>
  );
}

function InnerProviders({ children }: PropsWithChildren<Props>): ReactElement {
  const { network } = useConfig();
  const queryClient = new QueryClient();
  return (
    <ConnectionProvider endpoint={network.endpoint}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </ConnectionProvider>
  );
}
