import {
  ForwardedRef,
  forwardRef,
  ReactElement,
  useState,
  MouseEvent,
} from "react";
import { Box, Stack } from "@mui/material";
import { Screen } from "./Screen";
import { Keypad } from "./Keypad";

export interface Props {}

export const CalculatePane = forwardRef(
  (_: Props, ref: ForwardedRef<HTMLDivElement>): ReactElement => {
    const [amount, setAmount] = useState("0");
    const [currency] = useState("USD");

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
      const input = e.currentTarget.dataset.keypad;
      switch (input) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "00":
        case ".":
          setAmount((prev) => {
            if (
              prev === "0" &&
              input !== "." &&
              input !== "0" &&
              input !== "00"
            ) {
              return input;
            }
            if (prev.length >= 15) {
              return prev;
            }
            if (prev.includes(".") && input === ".") {
              return prev;
            }
            if (prev.length === 14 && input === ".") {
              return prev;
            }
            if (prev.length === 14 && input === "00") {
              return `${prev}0`;
            }
            if (prev === "0" && (input === "0" || input === "00")) {
              return prev;
            }
            return `${prev}${input}`;
          });
          break;
        case "C":
          setAmount("0");
          break;
        case "BS":
          setAmount((prev) => {
            if (prev.length === 1) {
              return "0";
            }
            return prev.slice(0, -1);
          });
          break;
        default:
          throw new Error(`Invalid input ${input}`);
      }
    };

    return (
      <Layout
        upper={<Screen amount={amount} currency={currency} />}
        lower={<Keypad onClick={onClick} />}
        ref={ref}
      />
    );
  },
);

interface LayoutProps {
  upper: ReactElement;
  lower: ReactElement;
}

export const Layout = forwardRef(
  (
    { upper, lower }: LayoutProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): ReactElement => {
    return (
      <Box width={1} height={1} sx={{ display: "grid", placeItems: "center" }}>
        <Stack width={1} spacing={2} ref={ref}>
          <Box width={1} px={2}>{upper}</Box>
          <Box width={1}>{lower}</Box>
        </Stack>
      </Box>
    );
  },
);
