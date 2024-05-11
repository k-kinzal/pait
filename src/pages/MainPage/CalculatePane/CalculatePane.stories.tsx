import { StoryObj } from "@storybook/react";
import { CalculatePane } from "./CalculatePane";
import {ConfigProvider} from "../../../providers/ConfigProvider.tsx";

type Story = StoryObj<void>;

export default {
  title: "Pane/CalculatePane",
  component: CalculatePane,
};

export const Default: Story = {
  args: undefined,
  render: () => (
    <ConfigProvider >
      <CalculatePane />
    </ConfigProvider>
  ),
};
