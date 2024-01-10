import { StoryObj } from "@storybook/react";
import { Props, Screen } from "./Screen";

type Story = StoryObj<Props>;

export default {
  title: "Components/Screen",
  component: Screen,
};

export const Default: Story = {
  args: {
    amount: "12000.00",
    currency: "USD",
  },
};

export const Zero: Story = {
  args: {
    amount: "0",
    currency: "JPY",
  },
};

export const Maximum: Story = {
  args: {
    amount: "999999999999999",
    currency: "EUR",
  },
};
