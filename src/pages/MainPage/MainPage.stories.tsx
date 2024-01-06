import { StoryObj } from "@storybook/react";
import { MainPage } from "./MainPage";

type Story = StoryObj<void>;

export default {
	title: "Main/MainPage",
	component: MainPage,
};

export const Default: Story = {
	args: undefined,
};
