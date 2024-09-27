import {type ForwardedRef, forwardRef, type PropsWithChildren, type ReactElement, useId} from "react";
import {FormControl, InputLabel, Select as MuiSelect, type SelectProps} from "@mui/material";

interface Props extends Omit<SelectProps, "labelId"> {

}

export const Select = forwardRef(
(
  {children, label, ...props}: PropsWithChildren<Props>,
  ref: ForwardedRef<HTMLDivElement>,
): ReactElement => {
  const id = useId()
  return (
    <FormControl ref={ref} fullWidth>
      <InputLabel id={id}>{label}</InputLabel>
      <MuiSelect
        labelId={id}
        label={label}
        size="small"
        variant="outlined"
        {...props}
      >
        {children}
      </MuiSelect>
    </FormControl>
  );
});