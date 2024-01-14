import { ForwardedRef, forwardRef, ReactElement } from "react";
import { Box, useTheme } from "@mui/material";
import { SolanaPayTransferRequestQRCode } from "./SolanaPayTransferRequestQRCode";
import { BoxProps } from "@mui/material/Box/Box";

export interface Props extends BoxProps {
  recipient: string;
  amount?: number;
}

export const QRCodePane = forwardRef(
  (
    { recipient, amount, ...props }: Props,
    ref: ForwardedRef<HTMLDivElement>,
  ): ReactElement => {
    const theme = useTheme();

    return (
      <Box sx={{ width: 1, textAlign: "center" }} ref={ref} {...props}>
        <SolanaPayTransferRequestQRCode
          recipient={recipient}
          amount={amount}
          width={200}
          height={200}
          dotsOptions={{
            color: theme.palette.background.inverted,
          }}
        />
      </Box>
    );
  },
);
