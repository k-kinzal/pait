import { ForwardedRef, forwardRef, ReactElement } from "react";
import { Button, Typography } from "@mui/material";
import { ButtonProps } from "@mui/material/Button/Button";

export interface Props extends ButtonProps {
	children: number | string | ReactElement;
}

export const BigKey = forwardRef(
  (
    { children, size, ...props }: Props,
    ref: ForwardedRef<HTMLButtonElement>,
  ): ReactElement => {

    const [width, height] = {
      // height = width * 2 + 8
      small: ["32px", "72px"],
      medium: ["48px", "104px"],
      large: ["64px", "136px"],
    }[size ?? "medium"];

    return (
      <Button
        variant="contained"
        color="grey"
        size={size}
        sx={{
          minWidth: "",
          width,
          height,
          aspectRatio: 0.5,
          borderRadius: "999px",
          color: "white",
          letterSpacing: "0.1em",
        }}
        ref={ref}
        {...props}
      >
        <Typography fontWeight="bold" fontSize="small">{children}</Typography>
      </Button>
    );
  },
);
