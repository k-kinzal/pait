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

    const width = {
      small: "32px",
      medium: "48px",
      large: "64px",
    }[size ?? "medium"];

    const height = {
      small: "72px", // 32 x 2 + 8
      medium: "104px", // 48 x 2 + 8
      large: "136px", // 64 x 2 + 8
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
