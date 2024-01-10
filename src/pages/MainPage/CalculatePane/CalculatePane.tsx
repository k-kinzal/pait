import { ForwardedRef, forwardRef, ReactElement } from "react";
import { Box, IconButton, Stack } from "@mui/material";
import { Screen } from "./Screen";
import { Keypad } from "./Keypad";
import LockOpenIcon from "@mui/icons-material/LockOpen";

export interface Props {}

export const CalculatePane = forwardRef(
  (_: Props, ref: ForwardedRef<HTMLDivElement>): ReactElement => {
    const amount = 12000;
    const currency = "USD";

    return (
      <Box position="relative">
        <Box position="absolute" top={14} left={-20}>
          <IconButton
            sx={{
              width: "26px",
              height: "26px",
              minHeight: "26px",
              backgroundColor: "black",
              color: "grey.500",
            }}
          >
            <LockOpenIcon />
          </IconButton>
        </Box>
        <Stack spacing={0} ref={ref}>
          <Box sx={{ width: 1 }}>
            <Screen
              amount={amount.toLocaleString("USD", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 20,
              })}
              currency={currency}
            />
          </Box>
          <Box sx={{ width: 1 }}>
            <Keypad />
          </Box>
        </Stack>
      </Box>
    );
  },
);
