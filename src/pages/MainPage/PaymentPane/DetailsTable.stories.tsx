import { StoryObj } from "@storybook/react";
import { DetailsTable, Props } from "./DetailsTable";

type Story = StoryObj<Props>;

export default {
  title: "Components/DetailsTable",
  component: DetailsTable,
};

export const Default: Story = {
  args: {
    recipientCurrency: "USD",
    senderCurrency: "SOL",
    exchangeRate: 1.12,
    transactionFee: 0.00000032,
    totalAmount: 112.00000032,
  },
};
