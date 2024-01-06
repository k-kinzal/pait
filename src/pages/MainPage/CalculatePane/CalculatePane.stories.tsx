import { StoryObj } from "@storybook/react";
import { CalculatePane } from "./CalculatePane";

type Story = StoryObj<void>;

export default {
	title: "Main/CalculatePane",
	component: CalculatePane,
};

export const Default: Story = {
	args: undefined,
};
