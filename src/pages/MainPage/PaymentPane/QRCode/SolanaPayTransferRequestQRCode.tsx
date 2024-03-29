import { ForwardedRef, forwardRef, ReactElement } from "react";
import { Props as QRCodeProps, QRCode } from "./QRCode";

export interface Props extends Omit<QRCodeProps, "data"> {
  recipient: string;
  amount?: number;
  splToken?: string;
  reference?: string;
  label?: string;
  message?: string;
  memo?: string;
}

export const SolanaPayTransferRequestQRCode = forwardRef(
  (
    {
      recipient,
      amount,
      splToken,
      reference,
      label,
      message,
      memo,
      ...props
    }: Props,
    ref: ForwardedRef<HTMLDivElement>,
  ): ReactElement => {
    const url = new URL(`solana://${recipient}`);
    if (amount) {
      url.searchParams.append("amount", amount.toString());
    }
    if (splToken) {
      url.searchParams.append("spl-token", splToken);
    }
    if (reference) {
      url.searchParams.append("reference", reference);
    }
    if (label) {
      url.searchParams.append("label", label);
    }
    if (message) {
      url.searchParams.append("message", message);
    }
    if (memo) {
      url.searchParams.append("memo", memo);
    }

    return <QRCode data={url.toString()} ref={ref} {...props} />;
  },
);
