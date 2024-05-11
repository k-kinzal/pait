import {
  type ForwardedRef,
  forwardRef,
  type PropsWithChildren,
  type ReactElement,
  Suspense,
  useState,
} from "react";
import { Box, Stack, type StackProps } from "@mui/material";
import { QRCodePane } from "./QRCode/QRCodePane";
import type { BoxProps } from "@mui/material/Box/Box";
import { TokenSelect } from "./TokenSelect";
import { DetailsTable } from "./DetailsTable";
import { ErrorBoundary } from "react-error-boundary";
import { type Token, useConfig } from "../../../providers/ConfigProvider";
import { usePriceQuery } from "../../../hooks/usePriceQuery";

export interface Props {
  recipientAmount: number;
}

export const PaymentPane = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLDivElement>): ReactElement => {
    return (
      <ErrorBoundary fallback={<Fallback />}>
        <Suspense fallback={<Fallback />}>
          <Pane ref={ref} {...props} />
        </Suspense>
      </ErrorBoundary>
    );
  },
);

const Pane = forwardRef(
  (
    { recipientAmount }: Props,
    ref: ForwardedRef<HTMLDivElement>,
  ): ReactElement => {
    const { recipient, tokens, paymentMethod } = useConfig();
    const [token, setToken] = useState<Token>(tokens[0]);

    const { data } = usePriceQuery(token.feed, {
      refetchInterval: 10000,
    });

    const onChangeToken = async (_: unknown, currency: Token) => {
      return setToken(currency);
    };

    return (
      <Layout ref={ref}>
        <Content>
          <TokenSelect
            currencies={tokens}
            size="small"
            onChange={onChangeToken}
          />
        </Content>
        <Content>
          <QRCodePane
            paymentMethod={paymentMethod}
            recipient={recipient.address}
            amount={recipientAmount / (data?.price || 1)}
            splToken={token.address}
          />
        </Content>
        <Content>
          <DetailsTable
            feeCurrency={"SOL"}
            recipientCurrency={recipient.currency}
            senderCurrency={token.code}
            exchangeRate={Number((data?.price || 1).toFixed(8))}
            transactionFee={0.000005}
            totalAmount={Number(
              (recipientAmount / (data?.price || 1) + 0.000005).toFixed(8),
            )}
          />
        </Content>
      </Layout>
    );
  },
);

interface LayoutProps extends StackProps {
  children: ReactElement[];
}

const Layout = forwardRef(
  (
    { children, ...props }: LayoutProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): ReactElement => {
    return (
      <Stack spacing={2} width={1} height={1} ref={ref} {...props}>
        {children}
      </Stack>
    );
  },
);

const Content = forwardRef(
  (
    { children, ...props }: PropsWithChildren<BoxProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ): ReactElement => {
    return (
      <Box sx={{ width: 1 }} ref={ref} {...props}>
        {children}
      </Box>
    );
  },
);

const Fallback = forwardRef(
  (_, ref: ForwardedRef<HTMLDivElement>): ReactElement => {
    return <div ref={ref}>Fallback</div>;
  },
);
