import type { StoryObj } from "@storybook/react";
import { Keypad } from "./Keypad";

type Story = StoryObj<void>;

export default {
  title: "Components/Keypad",
  component: Keypad,
};

export const Default: Story = {
  args: undefined,
};
