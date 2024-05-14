import type {
  UseQueryOptions,
  UseQueryResult,
} from "react-query/types/react/types";
import type { Feed } from "../providers/ConfigProvider";
import { parsePriceData } from "@pythnetwork/client";
import { useConnection } from "../providers/ConnectionProvider";
import { useQuery } from "react-query";

export interface PriceData {
  price: number | undefined;
  timestamp: bigint;
}

export type PriceInput = Feed;

export type PriceOutput = UseQueryResult<PriceData | undefined, Error>;

export interface QueryOptions
  extends Omit<
    UseQueryOptions<
      PriceData | undefined,
      Error,
      PriceData | undefined,
      ["prices", Feed]
    >,
    "queryKey" | "queryFn"
  > {}

export function usePriceQuery(
  input: PriceInput,
  options?: QueryOptions,
): PriceOutput {
  switch (input.type) {
    case "pyth-network": {
      return usePythNetworkPrice(input, options);
    }
    default:
      throw new Error("Unknown feed type");
  }
}

function usePythNetworkPrice(input: Feed, options?: QueryOptions): PriceOutput {
  const connection = useConnection();
  return useQuery(
    ["prices", input],
    async (ctx) => {
      const feed = ctx.queryKey[1];
      const account = await connection.getAccountInfo(feed.address);
      if (!account) {
        throw new Error("Account not found");
      }
      const data = parsePriceData(account.data);
      return {
        price: data.price,
        timestamp: data.timestamp,
      };
    },
    options,
  );
}
