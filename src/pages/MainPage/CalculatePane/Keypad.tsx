import { ForwardedRef, forwardRef, ReactElement } from "react";
import { Box } from "@mui/material";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { Key } from "./Keypad/Key";
import { BigKey } from "./Keypad/BigKey";
import { SubdirectoryArrowLeft } from "@mui/icons-material";
import { BoxProps } from "@mui/material/Box/Box";
import { ButtonProps } from "@mui/material/Button/Button";

export interface Props extends ButtonProps {}

export const Keypad = forwardRef(
  ({ ...props }: Props, ref: ForwardedRef<HTMLDivElement>): ReactElement => {
    return (
      <Grid ref={ref}>
        <Item>
          <Key size="large" {...props}>
            1
          </Key>
        </Item>
        <Item>
          <Key size="large" {...props}>
            2
          </Key>
        </Item>
        <Item>
          <Key size="large" {...props}>
            3
          </Key>
        </Item>
        <Item>
          <Key size="large" color="secondary" {...props}>
            <BackspaceIcon sx={{ marginLeft: "-3px" }} />
          </Key>
        </Item>
        <Item>
          <Key size="large" {...props}>
            4
          </Key>
        </Item>
        <Item>
          <Key size="large" {...props}>
            5
          </Key>
        </Item>
        <Item>
          <Key size="large" {...props}>
            6
          </Key>
        </Item>
        <Item>
          <Key size="large" color="secondary" {...props}>
            C
          </Key>
        </Item>
        <Item>
          <Key size="large" {...props}>
            7
          </Key>
        </Item>
        <Item>
          <Key size="large" {...props}>
            8
          </Key>
        </Item>
        <Item>
          <Key size="large" {...props}>
            9
          </Key>
        </Item>
        <Item sx={{ height: "200%" }}>
          <BigKey size="large" color="primary" {...props}>
            <SubdirectoryArrowLeft />
          </BigKey>
        </Item>
        <Item>
          <Key size="large" {...props}>
            0
          </Key>
        </Item>
        <Item>
          <Key size="large" {...props}>
            00
          </Key>
        </Item>
        <Item>
          <Key size="large" {...props}>
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
			<Box sx={{display: "flex", alignItems: "center", justifyContent: "center", ...sx}} ref={ref} {...props}>
				{children}
			</Box>
		);
	},
);
