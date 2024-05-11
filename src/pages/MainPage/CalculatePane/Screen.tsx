import { ForwardedRef, forwardRef, ReactElement } from "react";
import { Stack, StackProps, Typography } from "@mui/material";

function locale_format(n: string, locales: string): string {
  const [_, decimal] = n.split(".");
  const decimalLength = decimal?.length ?? 0;
  return Number(n).toLocaleString(locales, {
    minimumFractionDigits: decimalLength,
    maximumFractionDigits: decimalLength,
  });
}

export interface Props extends StackProps {
  amount: string;
  currency: string;
}

export const Screen = forwardRef(
  (
    { amount, currency, sx, ...props }: Props,
    ref: ForwardedRef<HTMLDivElement>,
  ): ReactElement => {
    if (amount.length > 15) {
      throw new Error("Amount too long");
    }
    if (!/[0-9.]/.test(amount)) {
      throw new Error("Invalid amount");
    }

    const fontSize = ((len) => {
      if (len < 9) {
        return "xxx-large";
      }
      if (len < 13) {
        return "xx-large";
      }
      return "x-large";
    })(amount.length);

    return (
      <Stack
        sx={{
          width: 1,
          height: "96px",
          justifyContent: "flex-end",
          ...sx,
        }}
        ref={ref}
        {...props}
      >
        <Typography align="right" fontSize={fontSize} lineHeight={1} ref={ref}>
          {locale_format(amount, "en-US")}
        </Typography>
        <Typography variant="body1" align="right" ref={ref}>
          {currency}
        </Typography>
      </Stack>
    );
  },
);
