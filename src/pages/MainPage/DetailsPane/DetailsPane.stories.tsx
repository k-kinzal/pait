import { StoryObj } from "@storybook/react";
import { DetailsPane } from "./DetailsPane";

type Story = StoryObj<void>;

export default {
	title: "Main/DetailsPane",
	component: DetailsPane,
};

export const Default: Story = {
	args: undefined,
};
