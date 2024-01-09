import { ForwardedRef, forwardRef, ReactElement } from "react";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CalculatePane } from "./CalculatePane/CalculatePane";
import { DetailsPane } from "./DetailsPane/DetailsPane";

export interface Props {}

export const MainPage = forwardRef(
  (_: Props, ref: ForwardedRef<HTMLDivElement>): ReactElement => {
    return (
      <Box
        width={1}
        height={1}
        py={8}
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
        ref={ref}
      >
        <Container maxWidth={"md"}>
          <Grid
            container
            spacing={1}
            width={1}
            height={1}
            columns={{ xs: 1, sm: 2 }}
          >
            <Grid xs={1} height={1}>
              <Box
                width={1}
                height={1}
                sx={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  borderRadius: "16px",
                  backgroundColor: "black",
                  overflow: "hidden",
                }}
              >
                <CalculatePane />
              </Box>
            </Grid>
            <Grid xs={1} height={1}>
              <Box
                width={1}
                height={1}
                sx={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  borderRadius: "16px",
                  backgroundColor: "black",
                  overflow: "hidden",
                }}
              >
                <DetailsPane />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  },
);
