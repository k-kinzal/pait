import { StoryObj } from "@storybook/react";
import { Screen } from "./Screen";

type Story = StoryObj<void>;

export default {
  title: "Components/Screen",
  component: Screen,
};

export const Default: Story = {
  args: undefined,
};
