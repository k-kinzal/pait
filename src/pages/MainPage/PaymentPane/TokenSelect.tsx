import { ForwardedRef, forwardRef, ReactElement } from "react";
import { Autocomplete, AutocompleteProps, TextField } from "@mui/material";
import { Token } from "../../../providers/ConfigProvider";

export interface Props
  extends Omit<
    AutocompleteProps<Token, false, true, false>,
    | "options"
    | "autoHighlight"
    | "disableClearable"
    | "getOptionLabel"
    | "renderInput"
  > {
  currencies: Token[];
}

export const TokenSelect = forwardRef(
  (
    { currencies, ...props }: Props,
    ref: ForwardedRef<HTMLDivElement>,
  ): ReactElement => {
    if (currencies.length === 0) {
      throw new Error("currencies must not be empty");
    }

    return (
      <Autocomplete
        options={currencies}
        defaultValue={currencies[0]}
        autoHighlight
        disableClearable={true}
        getOptionLabel={(option) => `${option.label} (${option.code})`}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Token"
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
