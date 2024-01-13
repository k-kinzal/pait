import { ForwardedRef, forwardRef, ReactElement } from "react";
import {
  Autocomplete,
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { SolanaPayTransferRequestQRCode } from "./QRCode/SolanaPayTransferRequestQRCode.tsx";

export interface Props {}

export const DetailsPane = forwardRef(
  (_: Props, ref: ForwardedRef<HTMLDivElement>): ReactElement => {
    return (
      <Stack spacing={0} ref={ref} pt={10}>
        <Box sx={{ width: 1, textAlign: "center" }} p={2}>
          <SolanaPayTransferRequestQRCode recipient="2jqa57XHU7weXF867pvfJfzo6jBBwk7Xwd2MX1MP8Jub" />
        </Box>
        <Box sx={{ width: 1 }} p={2}>
          <Autocomplete
            sx={{ width: 256 }}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <img
                  loading="lazy"
                  width="20"
                  src="https://cryptologos.cc/logos/solana-sol-logo.png"
                  alt=""
                />
                {option.label} ({option.code})
              </Box>
            )}
            renderInput={(params) => {
              console.log(params);
              return (
                <TextField
                  {...params}
                  label="Currency"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password", // disable autocomplete and autofill
                    endAdornment: (
                      <InputAdornment position="end">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
              );
            }}
          />
        </Box>
        <Box sx={{ width: 1, display: "flex", flexDirection: "row" }}>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            Rate per USD:
          </Typography>
          <Typography variant="body2" flexGrow={1} textAlign="right">
            1.12 SOL
          </Typography>
        </Box>
        <Box sx={{ width: 1, display: "flex", flexDirection: "row" }}>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            Fee:
          </Typography>
          <Typography variant="body2" flexGrow={1} textAlign="right">
            0.00000034 SOL
          </Typography>
        </Box>
        <Box sx={{ width: 1, display: "flex", flexDirection: "row" }}>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            Balance Due:
          </Typography>
          <Typography variant="body2" flexGrow={1} textAlign="right">
            112 SOL
          </Typography>
        </Box>
      </Stack>
    );
  },
);

const countries = [{ code: "Solana", label: "SOL" }];
