import React, { type PropsWithChildren, type ReactElement } from "react";
import {
  type Cluster,
  clusterApiUrl,
  type Commitment,
  Connection,
  type ConnectionConfig,
} from "@solana/web3.js";

const ConnectionContext = React.createContext<Connection | null>(null);

interface Props {
  endpoint?: string;
  cluster?: Cluster;
  commitmentOrConfig?: Commitment | ConnectionConfig;
}

export function ConnectionProvider({
  children,
  endpoint,
  cluster,
  commitmentOrConfig,
}: PropsWithChildren<Props>): ReactElement {
  const connection = new Connection(
    endpoint || clusterApiUrl(cluster ?? "mainnet-beta"),
    commitmentOrConfig,
  );
  return (
    <ConnectionContext.Provider value={connection}>
      {children}
    </ConnectionContext.Provider>
  );
}

export function useConnection(): Connection {
  const connection = React.useContext(ConnectionContext);
  if (connection === null) {
    throw new Error("Not initialized with Web3Provider.");
  }
  return connection;
}
