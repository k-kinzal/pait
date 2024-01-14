import { ForwardedRef, forwardRef, ReactElement } from "react";
import { Autocomplete, AutocompleteProps, TextField } from "@mui/material";

export interface Currency {
  code: string;
  label: string;
  icon: string;
}

export interface Props
  extends Omit<
    AutocompleteProps<Currency, false, true, false>,
    | "options"
    | "autoHighlight"
    | "disableClearable"
    | "getOptionLabel"
    | "renderInput"
  > {
  currencies: Currency[];
}

export const CurrencySelect = forwardRef(
  (
    { currencies, ...props }: Props,
    ref: ForwardedRef<HTMLDivElement>,
  ): ReactElement => {
    return (
      <Autocomplete
        options={currencies}
        defaultValue={currencies[0]}
        autoHighlight
        disableClearable={true}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Currency"
            inputProps={{
              ...params.inputProps,
              style: {
                fontWeight: "bold",
              },
            }}
          />
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
