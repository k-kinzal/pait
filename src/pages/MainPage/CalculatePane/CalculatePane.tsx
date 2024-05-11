import {
  ForwardedRef,
  forwardRef,
  ReactElement,
  useState,
  MouseEvent,
} from "react";
import { Box, Stack, StackProps } from "@mui/material";
import { Screen } from "./Screen";
import { Keypad } from "./Keypad";
import { BoxProps } from "@mui/material/Box/Box";
import { useConfig } from "../../../providers/ConfigProvider";

export interface Props {
  onChangeAmount?: (amount: number) => void | Promise<void>;
}

export const CalculatePane = forwardRef(
  (
    { onChangeAmount }: Props,
    ref: ForwardedRef<HTMLDivElement>,
  ): ReactElement => {
    const { recipient } = useConfig();
    const [amount, setAmount] = useState("0");

    const onClick = async (e: MouseEvent<HTMLButtonElement>) => {
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
          if (onChangeAmount) {
            const result = onChangeAmount(0);
            if (result instanceof Promise) {
              await result;
            }
          }
          break;
        case "BS":
          setAmount((prev) => {
            if (prev.length === 1) {
              return "0";
            }
            return prev.slice(0, -1);
          });
          break;
        case "EN":
          if (onChangeAmount) {
            const result = onChangeAmount(Number(amount));
            if (result instanceof Promise) {
              await result;
            }
          }
          break;
        default:
          throw new Error(`Invalid input ${input}`);
      }
    };

    return (
      <Layout ref={ref}>
        <Content>
          <Screen amount={amount} currency={recipient.currency} px={2} />
        </Content>
        <Content>
          <Keypad onClick={onClick} />
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
    { children, ...props }: BoxProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): ReactElement => {
    return (
      <Box width={1} ref={ref} {...props}>
        {children}
      </Box>
    );
  },
);
