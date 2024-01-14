import {
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
  ReactElement,
} from "react";
import { Box, Stack, StackProps } from "@mui/material";
import { QRCodePane } from "./QRCode/QRCodePane.tsx";
import { BoxProps } from "@mui/material/Box/Box";
import { CurrencySelect } from "./CurrencySelect.tsx";
import { DetailsTable } from "./DetailsTable.tsx";

export interface Props {}

export const PaymentPane = forwardRef(
  (_: Props, ref: ForwardedRef<HTMLDivElement>): ReactElement => {
    const currencies = [
      {
        code: "Solana",
        label: "SOL",
        icon: "https://cryptologos.cc/logos/solana-sol-logo.png",
      },
    ];

    return (
      <Layout ref={ref}>
        <Content>
          <CurrencySelect currencies={currencies} size="small" />
        </Content>
        <Content>
          <QRCodePane
            recipient="2jqa57XHU7weXF867pvfJfzo6jBBwk7Xwd2MX1MP8Jub"
            amount={112}
          />
        </Content>
        <Content>
          <DetailsTable
            recipientCurrency={"USD"}
            senderCurrency={"SOL"}
            exchangeRate={1.12}
            transactionFee={0.00000034}
            totalAmount={112.00000034}
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
