import React, {
  type PropsWithChildren,
  type ReactElement,
  useContext,
  useState,
} from "react";
import {
  type Commitment,
  type ConnectionConfig,
  PublicKey,
} from "@solana/web3.js";

export enum PaymentMethod {
  SolanaPayTransferRequest = 0,
}

export enum LegalCurrency {
  USD = "USD",
  JPY = "JPY",
}

export interface SolanaNetworkConfig {
  type: "solana";
  endpoint: string;
  commitmentOrConfig?: Commitment | ConnectionConfig;
  // paymentMethod: PayMethodConfig;
}

export type NetworkConfig = SolanaNetworkConfig;

export interface SolanaRecipient {
  type: "solana";
  address: PublicKey;
  currency: LegalCurrency;
}

export type Recipient = SolanaRecipient;

export interface PythNetworkFeed {
  type: "pyth-network";
  address: PublicKey;
}

export type Feed = PythNetworkFeed;

export interface Token {
  code: string;
  label: string;
  address?: PublicKey;
  feed: Feed;
}

export interface Config {
  network: NetworkConfig;
  recipient: Recipient;
  tokens: Array<Token>;
  paymentMethod: PaymentMethod;
}

const InitialConfigState: Config = {
  network: {
    type: "solana",
    endpoint:
      "https://distinguished-indulgent-cloud.solana-mainnet.quiknode.pro/0235981febe7c704853779da1951dd64811dcd0a/",
    commitmentOrConfig: "finalized",
  },
  recipient: {
    type: "solana",
    address: new PublicKey("GezdpBqe9R8ZYpfUAf64NaoqYXNvoSL9gE5ZMqDFcZYa"),
    currency: LegalCurrency.USD,
  },
  tokens: [
    {
      code: "SOL",
      label: "Solana",
      feed: {
        type: "pyth-network",
        address: new PublicKey("H6ARHf6YXhGYeQfUzQNGk6rDNnLBQKrenN712K4AQJEG"),
      },
    },
    {
      code: "USDT",
      label: "Tether",
      address: new PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"),
      feed: {
        type: "pyth-network",
        address: new PublicKey("3vxLXJqLqF3JG5TCbYycbKWRBbCJQLxQmBGCkyqEEefL"),
      },
    },
    {
      code: "USDC",
      label: "USD Coin",
      address: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
      feed: {
        type: "pyth-network",
        address: new PublicKey("Gnt27xtC473ZT2Mw5u8wZ68Z3gULkSTb5DuxJy7eJotD"),
      },
    },
  ],
  paymentMethod: PaymentMethod.SolanaPayTransferRequest,
};

const ConfigStateContext = React.createContext<Config | null>(null);

interface Props {
  initial?: Config;
}

export function ConfigProvider({
  children,
  initial,
}: PropsWithChildren<Props>): ReactElement {
  const [state, _] = useState<Config>(initial || InitialConfigState);
  return (
    <ConfigStateContext.Provider value={state}>
      {children}
    </ConfigStateContext.Provider>
  );
}

export function useConfig(): Config {
  const state = useContext(ConfigStateContext);
  if (state === null) {
    throw new Error("Not initialised with ConfigProvider.");
  }
  return state;
}
