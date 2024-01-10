import { ForwardedRef, forwardRef, ReactElement } from "react";
import { Box, Container, IconButton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CalculatePane } from "./CalculatePane/CalculatePane";
import { DetailsPane } from "./DetailsPane/DetailsPane";
import LockOpenIcon from "@mui/icons-material/LockOpen";

export interface Props {}

export const MainPage = forwardRef(
  (_: Props, ref: ForwardedRef<HTMLDivElement>): ReactElement => {
    return (
      <Box width={1} height={1} ref={ref}>
        <Container maxWidth={"md"} sx={{ height: 1 }}>
          <Grid
            container
            spacing={1}
            width={1}
            height={1}
            columns={{ xs: 1, sm: 2 }}
            sx={{
              placeItems: "center",
            }}
          >
            <Grid xs={1} height="80%">
              <Box
                width={1}
                height={1}
                p={8}
                sx={{
                  borderRadius: "16px",
                  backgroundColor: "black",
                  overflow: "hidden",
                }}
              >
                <Box position="relative">
                  <Box position="absolute" mt={-7} ml={-7}>
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
                  <CalculatePane />
                </Box>
              </Box>
            </Grid>
            <Grid xs={1} height="80%">
              <Box
                width={1}
                height={1}
                p={4}
                sx={{
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
