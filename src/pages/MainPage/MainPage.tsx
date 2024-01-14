import {
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
  ReactElement,
} from "react";
import { Box, Container, IconButton, IconButtonProps } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CalculatePane } from "./CalculatePane/CalculatePane";
import { PaymentPane } from "./PaymentPane/PaymentPane";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { BoxProps } from "@mui/material/Box/Box";

export interface Props {}

export const MainPage = forwardRef(
  (_: Props, ref: ForwardedRef<HTMLDivElement>): ReactElement => {
    return (
      <Layout ref={ref}>
        <Content header={<LockIconButton />}>
          <CalculatePane />
        </Content>
        <Content>
          <PaymentPane />
        </Content>
      </Layout>
    );
  },
);

interface LayoutProps extends Omit<BoxProps, "children"> {
  children: ReactElement[];
}

export const Layout = forwardRef(
  (
    { children, ...props }: LayoutProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): ReactElement => {
    return (
      <Box width={1} height={1} ref={ref} {...props}>
        <Container maxWidth={"md"} sx={{ height: 1 }}>
          <Grid
            container
            spacing={2}
            width={1}
            height={1}
            columns={{ xs: 1, sm: 2 }}
            sx={{
              placeItems: "center",
            }}
          >
            {children.map((child, index) => (
              <Grid
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                xs={1}
                height="80%"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {child}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    );
  },
);

interface ContentProps extends BoxProps {
  header?: ReactElement;
}

const Content = forwardRef(
  (
    { children, header, ...props }: ContentProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): ReactElement => {
    return (
      <Box
        minWidth="365px"
        maxWidth="380px"
        width={1}
        height={1}
        p={5}
        boxSizing="border-box"
        sx={{
          borderRadius: "16px",
          backgroundColor: "black",
          overflow: "hidden",
        }}
        ref={ref}
        {...props}
      >
        {header && (
          <Box position="absolute" mt={-2} ml={-2}>
            {header}
          </Box>
        )}
        <Box
          width={1}
          height={1}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {children}
        </Box>
      </Box>
    );
  },
);

const LockIconButton = forwardRef(
  (
    { children, ...props }: PropsWithChildren<IconButtonProps>,
    ref: ForwardedRef<HTMLButtonElement>,
  ): ReactElement => {
    return (
      <IconButton
        sx={{
          width: "26px",
          height: "26px",
          minHeight: "26px",
          backgroundColor: "black",
          color: "grey.500",
        }}
        ref={ref}
        {...props}
      >
        <LockOpenIcon />
      </IconButton>
    );
  },
);
