import { StoryObj } from "@storybook/react";
import { PaymentPane } from "./PaymentPane.tsx";

type Story = StoryObj<void>;

export default {
  title: "Main/PaymentPane",
  component: PaymentPane,
};

export const Default: Story = {
  args: undefined,
};
