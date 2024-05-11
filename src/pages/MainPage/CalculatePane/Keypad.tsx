import { type ForwardedRef, forwardRef, type ReactElement } from "react";
import { Box } from "@mui/material";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { Key } from "./Keypad/Key";
import { BigKey } from "./Keypad/BigKey";
import { SubdirectoryArrowLeft } from "@mui/icons-material";
import type { BoxProps } from "@mui/material/Box/Box";
import type { ButtonProps } from "@mui/material/Button/Button";

export interface Props extends ButtonProps {}

export const Keypad = forwardRef(
  ({ ...props }: Props, ref: ForwardedRef<HTMLDivElement>): ReactElement => {
    return (
      <Grid ref={ref}>
        <Item>
          <Key size="large" data-keypad={"1"} {...props}>
            1
          </Key>
        </Item>
        <Item>
          <Key size="large" data-keypad={"2"} {...props}>
            2
          </Key>
        </Item>
        <Item>
          <Key size="large" data-keypad={"3"} {...props}>
            3
          </Key>
        </Item>
        <Item>
          <Key size="large" color="secondary" data-keypad={"BS"} {...props}>
            <BackspaceIcon sx={{ marginLeft: "-3px" }} />
          </Key>
        </Item>
        <Item>
          <Key size="large" data-keypad={"4"} {...props}>
            4
          </Key>
        </Item>
        <Item>
          <Key size="large" data-keypad={"5"} {...props}>
            5
          </Key>
        </Item>
        <Item>
          <Key size="large" data-keypad={"6"} {...props}>
            6
          </Key>
        </Item>
        <Item>
          <Key size="large" data-keypad={"C"} color="secondary" {...props}>
            C
          </Key>
        </Item>
        <Item>
          <Key size="large" data-keypad={"7"} {...props}>
            7
          </Key>
        </Item>
        <Item>
          <Key size="large" data-keypad={"8"} {...props}>
            8
          </Key>
        </Item>
        <Item>
          <Key size="large" data-keypad={"9"} {...props}>
            9
          </Key>
        </Item>
        <Item sx={{ height: "200%" }}>
          <BigKey size="large" color="primary" data-keypad={"EN"} {...props}>
            <SubdirectoryArrowLeft />
          </BigKey>
        </Item>
        <Item>
          <Key size="large" data-keypad={"0"} {...props}>
            0
          </Key>
        </Item>
        <Item>
          <Key size="large" data-keypad={"00"} {...props}>
            00
          </Key>
        </Item>
        <Item>
          <Key size="large" data-keypad={"."} {...props}>
            .
          </Key>
        </Item>
      </Grid>
    );
  },
);

const Grid = forwardRef(
  (
    { children, sx, ...props }: BoxProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): ReactElement => {
    return (
      <Box
        sx={{
          display: "grid",
          gridAutoFlow: "row",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(4, 72px)",
          ...sx,
        }}
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  },
);

const Item = forwardRef(
  (
    { children, sx, ...props }: BoxProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): ReactElement => {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...sx,
        }}
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  },
);
