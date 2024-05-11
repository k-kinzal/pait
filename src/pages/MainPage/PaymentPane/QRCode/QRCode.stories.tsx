import type { StoryObj } from "@storybook/react";
import { QRCode, type Props } from "./QRCode";

type Story = StoryObj<Props>;

export default {
  title: "Components/QRCode",
  component: QRCode,
};

export const Default: Story = {
  args: {
    data: "foo",
  },
};
