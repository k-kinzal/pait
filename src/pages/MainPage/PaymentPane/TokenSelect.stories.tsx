import type { StoryObj } from "@storybook/react";
import { TokenSelect, type Props } from "./TokenSelect";
import { PublicKey } from "@solana/web3.js";

type Story = StoryObj<Props>;

export default {
  title: "Components/CurrencySelect",
  component: TokenSelect,
};

export const Default: Story = {
  args: {
    currencies: [
      {
        code: "SOL",
        label: "Solana",
        feed: {
          type: "pyth-network",
          address: new PublicKey(
            "H6ARHf6YXhGYeQfUzQNGk6rDNnLBQKrenN712K4AQJEG",
          ),
        },
      },
    ],
  },
};
