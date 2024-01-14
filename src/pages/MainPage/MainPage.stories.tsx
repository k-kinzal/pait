import { StoryObj } from "@storybook/react";
import { MainPage } from "./MainPage";

type Story = StoryObj<void>;

export default {
  title: "Global/MainPage",
  component: MainPage,
};

export const Default: Story = {
  args: undefined,
};
