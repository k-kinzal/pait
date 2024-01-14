import { StoryObj } from "@storybook/react";
import { CurrencySelect, Props } from "./CurrencySelect";

type Story = StoryObj<Props>;

export default {
  title: "Components/CurrencySelect",
  component: CurrencySelect,
};

export const Default: Story = {
  args: {
    currencies: [
      {
        code: "Solana",
        label: "SOL",
        icon: "https://cryptologos.cc/logos/solana-sol-logo.png",
      },
    ],
  },
};
