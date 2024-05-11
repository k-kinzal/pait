import { type ForwardedRef, forwardRef, type ReactElement } from "react";
import { Box, useTheme } from "@mui/material";
import { SolanaPayTransferRequestQRCode } from "./SolanaPayTransferRequestQRCode";
import type { BoxProps } from "@mui/material/Box/Box";
import type { PublicKey } from "@solana/web3.js";
import { PaymentMethod } from "../../../../providers/ConfigProvider";

export interface Props extends BoxProps {
  paymentMethod: PaymentMethod;
  recipient: PublicKey;
  amount?: number;
  splToken?: PublicKey;
}

export const QRCodePane = forwardRef(
  (
    { paymentMethod, recipient, amount, splToken, ...props }: Props,
    ref: ForwardedRef<HTMLDivElement>,
  ): ReactElement => {
    return (
      <Box sx={{ width: 1, textAlign: "center" }} ref={ref} {...props}>
        <QRCode
          recipient={recipient}
          amount={amount}
          paymentMethod={paymentMethod}
          splToken={splToken}
        />
      </Box>
    );
  },
);

const QRCode = forwardRef(
  (
    { paymentMethod, recipient, amount, splToken }: Props,
    ref: ForwardedRef<HTMLDivElement>,
  ): ReactElement => {
    const theme = useTheme();
    if (paymentMethod === PaymentMethod.SolanaPayTransferRequest) {
      return (
        <SolanaPayTransferRequestQRCode
          recipient={recipient}
          amount={amount}
          splToken={splToken}
          width={200}
          height={200}
          dotsOptions={{
            color: theme.palette.background.inverted,
          }}
          ref={ref}
        />
      );
    }
    throw new Error("Unsupported payment method");
  },
);
