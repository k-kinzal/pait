import {
  MenuItem, type SelectProps
} from "@mui/material";
import {type ForwardedRef, type ReactElement, forwardRef } from "react";

interface Props extends SelectProps<string> {

}

export const NetworkSelect = forwardRef(
(
  props: Props,
  ref: ForwardedRef<HTMLSelectElement>,
): ReactElement => {
  return (
    <Select
      value={"solana"}
      label="Network"
      sx={{width: 1}}
      ref={ref}
      {...props}
    >
      <MenuItem value="solana">
        Solana Network
      </MenuItem>
    </Select>
  );
});
