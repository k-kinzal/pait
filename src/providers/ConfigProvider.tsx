import React, {
  type PropsWithChildren,
  type ReactElement,
  useContext,
  useState,
} from "react";
import { PublicKey } from "@solana/web3.js";
import {
  array,
  coerce,
  enum_,
  instance,
  literal,
  object,
  optional,
  type Output,
  string,
} from "valibot";

export enum PaymentMethod {
  SolanaPayTransferRequest = 0,
}

export enum LegalCurrency {
  USD = "USD",
  JPY = "JPY",
}

export const FeedSchema = object({
  type: literal("pyth-network"),
  address: coerce(
    instance(PublicKey),
    (input) => new PublicKey(input as string),
  ),
});

export type Feed = Output<typeof FeedSchema>;

export const TokenSchema = object({
  code: string(),
  label: string(),
  address: optional(
    coerce(instance(PublicKey), (input) => new PublicKey(input as string)),
  ),
  feed: FeedSchema,
});

export type Token = Output<typeof TokenSchema>;

export const ConfigSchema = object({
  network: object({
    type: literal("solana"),
    endpoint: string(),
  }),
  recipient: object({
    type: literal("solana"),
    address: coerce(
      instance(PublicKey),
      (input) => new PublicKey(input as string),
    ),
    currency: enum_(LegalCurrency),
  }),
  tokens: array(TokenSchema),
  paymentMethod: enum_(PaymentMethod),
});

export type Config = Output<typeof ConfigSchema>;

export const DefaultConfig: Config = {
  network: {
    type: "solana",
    endpoint:
      "https://distinguished-indulgent-cloud.solana-mainnet.quiknode.pro/0235981febe7c704853779da1951dd64811dcd0a/",
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

const ConfigContext = React.createContext<Config | null>(null);

interface Props {
  initial?: Config;
}

export function ConfigProvider({
  children,
  initial,
}: PropsWithChildren<Props>): ReactElement {
  const [state, _] = useState<Config>(initial || DefaultConfig);
  return (
    <ConfigContext.Provider value={state}>{children}</ConfigContext.Provider>
  );
}

export function useConfig(): Config {
  const state = useContext(ConfigContext);
  if (state === null) {
    throw new Error("Not initialised with ConfigProvider.");
  }
  return state;
}
