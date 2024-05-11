import { StoryObj } from "@storybook/react";
import { MainPage } from "./MainPage";
import { ConfigProvider } from "../../providers/ConfigProvider.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { ConnectionProvider } from "../../providers/ConnectionProvider.tsx";

type Story = StoryObj<void>;

export default {
  title: "Global/MainPage",
  component: MainPage,
};

export const Default: Story = {
  args: undefined,
  render: () => {
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
            <MainPage />
          </QueryClientProvider>
        </ConnectionProvider>
      </ConfigProvider>
    );
  },
};
