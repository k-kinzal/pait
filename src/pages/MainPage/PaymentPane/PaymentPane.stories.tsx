import { StoryObj } from "@storybook/react";
import { PaymentPane } from "./PaymentPane";
import { ConnectionProvider } from "../../../providers/ConnectionProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { ConfigProvider } from "../../../providers/ConfigProvider.tsx";

type Story = StoryObj<void>;

export default {
  title: "Pane/PaymentPane",
  component: PaymentPane,
};

export const Default: Story = {
  args: undefined,
  render: (_) => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          suspense: true,
        },
      },
    });
    return (
      <ConfigProvider>
        <ConnectionProvider endpoint="https://distinguished-indulgent-cloud.solana-mainnet.quiknode.pro/0235981febe7c704853779da1951dd64811dcd0a/">
          <QueryClientProvider client={queryClient}>
            <PaymentPane recipientAmount={0} />
          </QueryClientProvider>
        </ConnectionProvider>
      </ConfigProvider>
    );
  },
};
